const db = require('../../models');
const todoModel = db.todos;
const moment = require('moment');

module.exports = async (req, res, next) => {
  try {
    const id = req.params.id;

    const isExist =  await todoModel.findOne({where: { id } });

    if(!isExist){
      return res.status(404).json({
        status: "Not Found",
        message: `Todo with ID ${id} Not Found`,
        data: {}
      });
    }

    const payload = {
      title: req.body.title,
      email: req.body.email,
      updated_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };

    await todoModel.update(payload, {where: {id}});
    const data = await todoModel.findOne({where: { id } });

    return res.status(200).json({
      status: "Success",
      message: "Success",
      data,
    });

  } catch (err) {
    console.error(err);
    return next(err);
  }
}
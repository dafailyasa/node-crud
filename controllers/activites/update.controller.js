const db = require('../../models');
const activityModel = db.activites;
const moment = require('moment');

module.exports = async (req, res, next) => {
  try {
    const id = req.params.id;

    const payload = {
      title: req.body.title,
      email: req.body.email,
      updated_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };

    const result = await activityModel.update(payload, 
      {
        where: {id}
      }
    );

    if(result < 1) {
      return res.status(404).json({
        status: "Not Found",
        message: `Activity with ID ${id} Not Found`,
        data: {}
      });
    }
    
    const data =  await activityModel.findOne({where: { id } });
    return res.status(200).json({
      status: "Success",
      message: "Success",
      data
    });

  } catch (err) {
    console.error(err);
    return next(err);
  }
}
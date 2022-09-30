const db = require('../../models');
const todoModel = db.todos;

module.exports = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await todoModel.findOne({
      where: {
        id
      }
    });

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
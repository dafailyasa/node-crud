const db = require('../../models');
const todoModel = db.todos;
const Op = db.Sequelize.Op;

module.exports = async (req, res, next) => {
  try {
    const { activity_group_id } = req.query;

    var condition = activity_group_id ? { activity_group_id: { [Op.in]: [activity_group_id] } } : null;

    const data = await todoModel.findAll({where: condition});

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
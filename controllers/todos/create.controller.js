const db = require('../../models');
const todoModel = db.todos;
const activityModel = db.activites;
const moment = require('moment');

module.exports = async (req, res, next) => {
  try {
    const payload = {
      title: req.body.title,
      priority: req.body.priority,
      is_active: req.body.is_active !== null ? true :req.body.is_active,
      activity_group_id: req.body.activity_group_id,
      created_at: moment().format("YYYY-MM-DD HH:mm:ss"),
      updated_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };
  
    const data = await todoModel.create(payload);

    return res.status(201).json({
      status: "Success",
      message: "Success",
      data
    });

  } catch (err) {
    console.error(err);
    return next(err);
  }
}
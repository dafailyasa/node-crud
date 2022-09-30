const db = require('../../models');
const activityModel = db.activites;
const moment = require('moment');

module.exports = async (req, res, next) => {
  try {
    const payload = {
      title: req.body.title,
      email: req.body.email,
      created_at: moment().format("YYYY-MM-DD HH:mm:ss"),
      updated_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };
  
    const data = await activityModel.create(payload);

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
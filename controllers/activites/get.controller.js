const db = require('../../models');
const activityModel = db.activites;

module.exports = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await activityModel.findOne({
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
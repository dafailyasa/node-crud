const db = require('../../models');
const activityModel = db.activites;
const moment = require('moment');

module.exports = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await activityModel.update(
      {
        deleted_at: moment()
      }, 
      {
        where: {id}
      }
    );

    if(data < 1){
      return res.status(404).json({
        status: "Not Found",
        message: `Activity with ID ${id} Not Found`,
        data: {}
      });
    }
      

    return res.status(200).json({
      status: "Success",
      message: "Success",
      data: {}
    });

  } catch (err) {
    console.error(err);
    return next(err);
  }
}
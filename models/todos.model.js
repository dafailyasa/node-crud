const moment = require('moment')
module.exports = (sequelize, Sequelize) => {
  const todos = sequelize.define("todos", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id",
    },
    title: {
      type: Sequelize.STRING,
      field: "title",
    },
    is_active: {
      type: Sequelize.STRING,
      field: "is_active",
    },
    priority: {
      type: Sequelize.STRING,
      field: "priority",
    },
    activity_group_id: {
      type: Sequelize.INTEGER,
      field: "activity_group_id",
    },
    created_at:{
      type: Sequelize.DATE, 
      field: "created_at",
    },
    updated_at:{
      type: Sequelize.DATE, 
      field: "updated_at",
    },
    deleted_at:{
      type: Sequelize.DATE, 
      field: "deleted_at",
      allowNull: true,
    }
  },
  {
    timestamps: false,
    indexes:[
      {
        unique: false,
        fields:['activity_group_id']
      }
     ]
  });
  return todos;
};
module.exports = (sequelize, Sequelize) => {
  const activites = sequelize.define("activities", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id",
    },
    email: {
      type: Sequelize.STRING,
      field: "email",
    },
    title: {
      type: Sequelize.STRING,
      field: "title",
    },
    created_at: {
      type: Sequelize.DATE, 
      field: 'created_at',
    },
    updated_at: {
      type: Sequelize.DATE, 
      field: 'updated_at'
    },
    deleted_at:{
      type: Sequelize.DATE,
      field: "deleted_at",
      allowNull: true,
    }
  }, 
  {
    timestamps: false,
    underscored: true
  });

  return activites;
};
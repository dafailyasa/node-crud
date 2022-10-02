const config = require("../configuration");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, {
  host: config.mysql.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.activites = require("./activites.model")(sequelize, Sequelize);
db.todos = require("./todos.model")(sequelize, Sequelize);

module.exports = db;
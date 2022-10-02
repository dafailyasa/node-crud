const express = require('express');
const config = require('./configuration');
const db = require("./models");
const app = express();
const routers = require('./routes');

app.use(express.json());

routers(app);

db.sequelize.sync().then(() => {
  console.log("Synced db.");
}).catch((err) => {
  console.log(`Failed to sync db: ${err.message}`);
});

const runServer = () => {
  app.listen(config.port, () => console.log(`App Starting on port ${config.port}`));
}

(async () => runServer() )();
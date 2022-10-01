const express = require('express');
const router = express.Router();
const { activiteCreate, activiteGet, activiteList, activiteDelete, activiteUpdate } = require('../controllers/activites');
const { todoCreate, todoGet, todoList, todoDelete, todoUpdate } = require('../controllers/todos');
const { createSchemaActivites, updateSchemaActivites } = require('../validations/activites.validation');
const { createSchemaTodos, updateSchemaTodos } = require('../validations/todos.validation');
const { bodyValidation } = require('../middlewares/bodyValidation');

router.post('/activity-groups', bodyValidation(createSchemaActivites), activiteCreate );
router.delete('/activity-groups/:id', activiteDelete);
router.patch('/activity-groups/:id',bodyValidation(updateSchemaActivites), activiteUpdate);
router.get('/activity-groups/:id', activiteGet);
router.get('/activity-groups', activiteList);


router.post('/todo-items', bodyValidation(createSchemaTodos), todoCreate );
router.delete('/todo-items/:id', todoDelete);
router.patch('/todo-items/:id',bodyValidation(updateSchemaTodos), todoUpdate);
router.get('/todo-items/:id', todoGet);
router.get('/todo-items', todoList);

module.exports = (app) => {
  app.use(router);
};
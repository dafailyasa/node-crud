const Joi = require("joi");

const createSchemaTodos = Joi.object().keys({
  title: Joi.string().required().messages({ "any.required": "title cannot be null" }),
  priority: Joi.string().optional(),
  activity_group_id: Joi.number().required().messages({ "any.required": "activity_group_id cannot be null" }),
  is_active: Joi.boolean(),
});

const updateSchemaTodos = Joi.object().keys({
  title: Joi.string().optional(),
  priority: Joi.string().optional(),
  activity_group_id: Joi.number().optional(),
  is_active: Joi.boolean(),
});


module.exports = {
  createSchemaTodos,
  updateSchemaTodos,
};
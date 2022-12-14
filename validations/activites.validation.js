const Joi = require("joi");

const createSchemaActivites = Joi.object({
  title: Joi.string().required().messages({ "any.required": "title cannot be null" }),
  email: Joi.string().email(),
});

const updateSchemaActivites = Joi.object().keys({
  title: Joi.string(),
  email: Joi.string().email(),
});

module.exports = {
  createSchemaActivites,
  updateSchemaActivites,
};
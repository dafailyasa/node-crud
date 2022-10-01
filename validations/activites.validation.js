const Joi = require("joi");

const createSchemaActivites = Joi.object({
  title: Joi.string().required(),
  email: Joi.string().email(),
});

const updateSchemaActivites = Joi.object().keys({
  title: Joi.string().required(),
  email: Joi.string().email(),
});

module.exports = {
  createSchemaActivites,
  updateSchemaActivites,
};
const Joi = require("joi");

const createSchemaActivites = Joi.object().keys({
  title: Joi.string().min(4).required(),
  email: Joi.string().email().required(),
});

const updateSchemaActivites = Joi.object().keys({
  title: Joi.string().min(4).required(),
  email: Joi.string().email().required(),
});

module.exports = {
  createSchemaActivites,
  updateSchemaActivites,
};
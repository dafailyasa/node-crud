exports.bodyValidation = (schema) => (req, res, next) => {
  const {
    error
  } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({messages: error.details[0].message});
  } else {
    next();
  }
};
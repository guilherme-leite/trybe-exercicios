const Joi = require('joi');
const rescue = require('express-rescue');
const userModel = require('../models/User');

const createUserSchema = Joi.object().keys({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()}).messages({
  'any.required': `O campo
  { #label } é obrigatório`,
  'string.min': `O campo {
  { #label} deve ter, pelo menos, { #limit } caracteres`,
  'string.email': `Informe um email válido no campo { #label }`
});

function isValid(userData) {
  return userSchema.validate(userData);
  }

module.exports = [
(req, res, next) => {

  const { error } = createUserSchema.validate(req.body);

  if (error) return next(error);

  next();
},
rescue(async (req, res, next) => {
const { firstName, lastName, email, password } = req.body;

if (!isValid({ firstName, lastName, email, password })) {
  const err = new Error('Invalid data');
  err.status = 400;
  return next(err);
}

const newUser = await userModel.create({ firstName, lastName, email, password });

res.status(201).json(newUser);
}),
];
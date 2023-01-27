import joi from "joi";

export const userSchema = joi.object({
  cardName: joi.string().required().min(3),
  cardNumber: joi.number().required(),
  securityNumber: joi.number().required(),
  expirationDate: joi.string().required(),
});
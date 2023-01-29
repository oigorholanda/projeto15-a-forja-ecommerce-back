import joi from "joi";

export const cardSchema = joi.object({
  cardName: joi.string().required().min(3),
  cardNumber: joi.number().required(),
  securityNumber: joi.number().required(),
  expirationDate: joi.string().required(),
  id: joi.string().required(),
});
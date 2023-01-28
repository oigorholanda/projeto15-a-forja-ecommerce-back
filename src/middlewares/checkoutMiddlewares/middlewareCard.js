import { cardSchema } from "../../models/CheckoutSchemas/cardSchema.js"

export function cardSchemaValidation(req, res, next) {
    const { cardName, cardNumber, securityNumber, expirationDate } = req.body;
  

    const { error } = cardSchema.validate({ cardName, cardNumber, securityNumber, expirationDate }, { abortEarly: false });
  
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(400).send(errors);
    }
  
    next();
  }
  

import { cardSchema } from "../../models/CheckoutSchemas/CardSchema.js"

export function cardSchemaValidation(req, res, next) {
    const { cardName, cardNumber, securityNumber, expirationDate, id } = req.body;
  

    const { error } = cardSchema.validate({ cardName, cardNumber, securityNumber, expirationDate, id }, { abortEarly: false });
  
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(422).send(errors);
    }
  
    next();
  }
  

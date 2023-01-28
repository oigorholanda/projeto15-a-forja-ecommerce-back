import { adressSchema } from "../../models/CheckoutSchemas/adressSchema.js"
export function adressSchemaValidation(req, res, next) {

    const { streetName, houseNumber, postalCode, details, id } = req.body;
    
    const { error } = adressSchema.validate({ streetName, houseNumber, postalCode, details, id }, { abortEarly: false });
  
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(400).send(errors);
    }
  
    next();
  }
  
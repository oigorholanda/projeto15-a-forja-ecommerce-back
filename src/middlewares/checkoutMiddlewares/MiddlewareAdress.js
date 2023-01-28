import { adressSchemaPost, adressSchemaGet } from "../../models/CheckoutSchemas/adressSchema.js"

export function adressPostSchemaValidation(req, res, next) {
    const { streetName, houseNumber, postalCode, details, id } = req.body;
    
    const { error } = adressSchemaPost.validate({ streetName, houseNumber, postalCode, details, id }, { abortEarly: false });
  
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(400).send(errors);
    }
  
    next();
  }
  
  export function adressGetSchemaValidation(req, res, next) {
    const { id } = req.body;
    
    const { error } = adressSchemaGet.validate({ id }, { abortEarly: false });
  
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(400).send(errors);
    }
  
    next();
  }
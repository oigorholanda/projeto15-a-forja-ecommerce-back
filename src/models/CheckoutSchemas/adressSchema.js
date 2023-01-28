import joi from "joi";

export const adressSchema = joi.object({
    streetName: joi.string().required().min(3),
    houseNumber: joi.number().required(),
    postalCode: joi.number().required(),
    details: joi.string().required(),
    id: joi.string().required(),
});
import joi from "joi";

export const adressSchemaPost = joi.object({
    streetName: joi.string().required().min(3),
    houseNumber: joi.number().required(),
    postalCode: joi.number().required(),
    details: joi.string(),
    id: joi.string().required(),
});


export const adressSchemaGet = joi.object({
    id: joi.string().required(),
});
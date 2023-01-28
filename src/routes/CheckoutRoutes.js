import { Router } from "express";
import { cardSchemaValidation } from "../middlewares/checkoutMiddlewares/middlewareCard.js";
import { adressSchemaValidation } from "../middlewares/checkoutMiddlewares/MiddlewareAdress.js";
import { adressAdd } from "../controllers/checkoutControllers/adressController.js";


const router = Router();


router.post("/shipmentinfo", adressSchemaValidation, adressAdd);
// router.post("/paymentinfo", signInBodyValidation, signIn);



export default router;
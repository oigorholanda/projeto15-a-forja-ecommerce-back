import { Router } from "express";
import { cardSchemaValidation } from "../middlewares/checkoutMiddlewares/middlewareCard.js";
import { adressSchemaValidation } from "../middlewares/checkoutMiddlewares/MiddlewareAdress.js";
import { adressAdd } from "../controllers/checkoutControllers/adressController.js";
import { cardAdd } from "../controllers/checkoutControllers/cardController.js";

const router = Router();


router.post("/shipmentinfo", adressSchemaValidation, adressAdd);
router.post("/paymentinfo", cardSchemaValidation, cardAdd);



export default router;
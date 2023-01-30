import { Router } from "express";
import { cardSchemaValidation } from "../middlewares/checkoutMiddlewares/middlewareCard.js";
import { adressPostSchemaValidation, adressGetSchemaValidation } from "../middlewares/checkoutMiddlewares/MiddlewareAdress.js";
import { adressAdd, adressGet } from "../controllers/checkoutControllers/adressController.js";
import { cardAdd } from "../controllers/checkoutControllers/cardController.js";
import { authRoutesValidation } from "../middlewares/middlewareAuth.js";

const router = Router();


router.post("/shipmentinfo", authRoutesValidation , adressPostSchemaValidation, adressAdd);
router.get("/shipmentinfo", authRoutesValidation, adressGetSchemaValidation, adressGet);
router.post("/paymentinfo", authRoutesValidation , cardSchemaValidation, cardAdd);



export default router;
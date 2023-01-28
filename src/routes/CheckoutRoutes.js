import { Router } from "express";
import { cardSchemaValidation } from "../middlewares/checkoutMiddlewares/middlewareCard.js";
import { adressSchemaValidation } from "../middlewares/checkoutMiddlewares/MiddlewareAdress.js";
import { adressAdd, adressGet } from "../controllers/checkoutControllers/adressController.js";
import { cardAdd } from "../controllers/checkoutControllers/cardController.js";
import { authRoutesValidation } from "../middlewares/middlewareAuth.js";

const router = Router();


router.post("/shipmentinfo", authRoutesValidation , adressSchemaValidation, adressAdd);
router.get("/shipmentinfo", authRoutesValidation, adressGet);
router.post("/paymentinfo", authRoutesValidation , cardSchemaValidation, cardAdd);



export default router;
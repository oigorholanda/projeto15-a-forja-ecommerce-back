import { Router } from "express";
import { delfromCart, getCart, saveCart } from "../controllers/cartController.js";
import { validateProduct } from "../middlewares/cart/middlewareCart.js";
import { authRoutesValidation } from "../middlewares/middlewareAuth.js";

const router = Router();

router.post("/cart", authRoutesValidation, validateProduct, saveCart)
router.get("/cart", authRoutesValidation, getCart)
router.delete("/cart/:id", authRoutesValidation, delfromCart)

export default router;
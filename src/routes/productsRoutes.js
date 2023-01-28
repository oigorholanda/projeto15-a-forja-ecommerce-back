import { Router } from "express";
import { pushProducts,sendProduct } from "../controllers/productController.js";

const router = Router();

router.get("/products", pushProducts)
router.get("/product/:id", sendProduct)

export default router;
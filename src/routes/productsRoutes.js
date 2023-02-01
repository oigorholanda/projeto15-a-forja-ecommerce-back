import { Router } from "express";
import { getProducts,sendProduct, pushProducts } from "../controllers/productController.js";

const router = Router();

router.get("/products", getProducts)
router.get("/product/:id", sendProduct)
router.post("/products", pushProducts)

export default router;
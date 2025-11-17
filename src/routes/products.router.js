import { Router } from "express";
import { getAllProducts, getProductById, searchProduct } from "../controllers/products.controller.js";

const router = Router();


router.get("/products", getAllProducts )

router.get("/products/search", searchProduct )

router.get("/products/:id", getProductById)

export default router;

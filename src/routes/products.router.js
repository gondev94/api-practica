import { Router } from "express";
import {
    getAllProducts,
    searchProduct,
    getProductById,
    createProduct
} from "../controllers/products.controller.js";

const router = Router();


router.get("/products", getAllProducts )

router.get("/products/search", searchProduct )

router.get("/products/:id", getProductById)

//creamos producto

router.post("/products", createProduct)

export default router;



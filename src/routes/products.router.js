import { Router } from "express";
import {
  getAllProducts,
  searchProduct,
  getProductById,
  createProduct,
  updateProduct,
  updatePatchProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

const router = Router();

router.get("/products", getAllProducts);

router.get("/products/search", searchProduct);

router.get("/products/:id", getProductById);

router.post("/products/", createProduct);

router.put("/products/:id", updateProduct);

router.patch("/products/:id", updatePatchProduct);

router.delete("/products/:id", deleteProduct);


// RECORDAR VER BIEN RUTAS "/" 
export default router;

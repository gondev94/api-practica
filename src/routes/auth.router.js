import { Router } from "express";
import { registrer, login } from "../controllers/auth.controller.js";

const router = Router();

router.post("/registrer", registrer);
router.post("/login", login);


export default router;
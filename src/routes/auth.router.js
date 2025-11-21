import { Router } from "express";
import { registrer } from "../controllers/auth.controller.js";

const router = Router();

router.post("/registrer", registrer);

export default router;
import { Router } from "express";
import userController from "../controllers/userController.js";
import { auth } from "../middlewares/auth.js";

const router = Router();

router.post("/", userController.create);
router.post("/login", userController.login);
router.get("/auth", auth, userController.authUser);

export default router;
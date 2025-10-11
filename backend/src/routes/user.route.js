import express from "express";
import createUserController from "../controllers/userControllers/registerUser.controller.js";
import loginUserController from "../controllers/userControllers/loginUser.controller.js";
import logoutUserController from "../controllers/userControllers/logoutUser.controller.js";
import verifyToken from "../middlewares/verifyToken.middleware.js";
import { verifyUserOrAdmin } from "../middlewares/verifyRole.middleware.js";

const router = express.Router();

router.post("/register", createUserController);
router.post("/login", loginUserController);
router.post("/logout", verifyToken, logoutUserController);

export default router;

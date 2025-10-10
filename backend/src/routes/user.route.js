import express from "express";
import createUserController from "../controllers/createUserController.controller.js";
import loginUserController from "../controllers/loginUserController.controller.js";
import logoutUserController from "../controllers/logoutUserController.controller.js";
import verifyToken from "../middlewares/verifyToken.middleware.js";
import refreshTokenController from "../controllers/refreshTokenController.controller.js";
import getAllUsersController from "../controllers/getAllUsersController.controller.js";

const router = express.Router();

router.post("/register", createUserController);
router.post("/login", loginUserController);
router.post("/logout", verifyToken, logoutUserController);
router.post("/refresh", refreshTokenController);
router.get("/users", verifyToken, getAllUsersController);

export default router;

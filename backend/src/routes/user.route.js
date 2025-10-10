import express from "express";
import createUserController from "../controllers/userControllers/registerUser.controller.js";
import loginUserController from "../controllers/userControllers/loginUser.controller.js";
import logoutUserController from "../controllers/userControllers/logoutUser.controller.js";
import verifyToken from "../middlewares/verifyToken.middleware.js";
import getAllUsersController from "../controllers/userControllers/getAllUsers.controller.js";
import deleteUserController from "../controllers/userControllers/deleteUser.controller.js";

const router = express.Router();

router.post("/register", createUserController);
router.post("/login", loginUserController);
router.post("/logout", verifyToken, logoutUserController);
router.get("/users", verifyToken, getAllUsersController);
router.delete('/user/:userId', deleteUserController);

export default router;

import express from "express";
import verifyToken from "../middlewares/verifyToken.middleware.js";
import { verifyAdmin } from "../middlewares/verifyRole.middleware.js";
import getAllUsersController from "../controllers/adminControllers/getAllUsers.controller.js";
import deleteUserController from "../controllers/adminControllers/deleteUser.controller.js";
import updateUserController from "../controllers/adminControllers/updateUser.controller.js";
import getUserStatsController from "../controllers/adminControllers/getUserStats.controller.js";

const router = express.Router();


router.use(verifyToken);
router.use(verifyAdmin);


router.get("/users", getAllUsersController);
router.get("/stats", getUserStatsController);
router.delete("/user/:userId", deleteUserController);
router.patch("/user/:userId", updateUserController);

export default router;

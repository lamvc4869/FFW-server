import express from "express";
import createUserController from "../controllers/userControllers/registerUser.controller.js";
import loginUserController from "../controllers/userControllers/loginUser.controller.js";
import logoutUserController from "../controllers/userControllers/logoutUser.controller.js";
import searchProductByNameController from "../controllers/sharedControllers/searchProductByName.controller.js";
import getAllProductsController from "../controllers/sharedControllers/getAllProducts.controller.js";
import verifyToken from "../middlewares/verifyToken.middleware.js";

const router = express.Router();

router.post("/register", createUserController);
router.post("/login", loginUserController);
router.post("/logout", verifyToken, logoutUserController);
router.get('/product/search', verifyToken, searchProductByNameController);
router.get('/products', verifyToken, getAllProductsController);

export default router;

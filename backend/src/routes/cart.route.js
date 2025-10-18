import express from "express";
import verifyToken from "../middlewares/verifyToken.middleware.js";
import { verifyUserOrAdmin} from "../middlewares/verifyRole.middleware.js";
import createCartController from "../controllers/cartControllers/createCart.controller.js";
import getAllCartsController from "../controllers/cartControllers/getAllCarts.controller.js";
import addProductToCartController from "../controllers/cartControllers/addProductToCart.controller.js";

const router = express.Router();

router.get("/", verifyToken, verifyUserOrAdmin, getAllCartsController);
router.post("/", verifyToken, verifyUserOrAdmin, createCartController);
router.post("/items", verifyToken, verifyUserOrAdmin, addProductToCartController);
export default router;


import express from "express";
import { upload } from "../utils/multer.js";
import verifyToken from "../middlewares/verifyToken.middleware.js";
import { verifyAdmin } from "../middlewares/verifyRole.middleware.js";
import getAllUsersController from "../controllers/adminControllers/getAllUsers.controller.js";
import deleteUserController from "../controllers/adminControllers/deleteUser.controller.js";
import updateUserController from "../controllers/adminControllers/updateUser.controller.js";
import getUserStatsController from "../controllers/adminControllers/getUserStats.controller.js";
import createProductController from "../controllers/adminControllers/createProduct.controller.js";
import deleteProductController from "../controllers/adminControllers/deleteProduct.controller.js";
import getAllProductsController from "../controllers/sharedControllers/getAllProducts.controller.js";
import searchProductByNameController from "../controllers/sharedControllers/searchProductByName.controller.js";
import updateProductController from "../controllers/adminControllers/updateProduct.controller.js";

const router = express.Router();

router.use(verifyToken);
router.use(verifyAdmin);

router.get("/users", getAllUsersController);
router.get("/stats", getUserStatsController);
router.delete("/user/:userId", deleteUserController);
router.patch("/user/:userId", updateUserController);

router.get('/products', getAllProductsController);
router.post("/product", upload.array("image", 4), createProductController);
router.delete("/product/:productId", deleteProductController);
router.get('/product/search', searchProductByNameController);
router.patch('/product/:productId', upload.array("image", 4), updateProductController);

export default router;

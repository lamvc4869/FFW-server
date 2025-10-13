import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {GENERAL_API, ADMIN_API} from "./src/utils/constants.js";
import { connectDB } from "./src/utils/db.js";
import userRoute from "./src/routes/user.route.js";
import adminRoute from "./src/routes/admin.route.js";
import { connectCloudinary } from "./src/utils/cloudinary.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(GENERAL_API, userRoute);
app.use(ADMIN_API, adminRoute);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

connectCloudinary().then(() => {
  console.log("Connected to cloudinary");
})

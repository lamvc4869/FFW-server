import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { GENERAL_API } from "./src/utils/constants.js";
import { connectDB } from "./src/utils/db.js";
import userRoute from "./src/routes/user.route.js";

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

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";

//CONFIGURATIONS
//const __filename = fileURLToPath(import.meta.url); //to grab the file url particulary when using the module
//const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })); //setting up HTTP headers security policy
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//mongoose set up
const PORT = process.env.PORT || 5005;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} failed to connect`));

//Routes
app.use("/auth", authRoutes);

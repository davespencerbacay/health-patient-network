import {
  colours,
  corsOptions,
  PROJECT_NAME
} from "./constants/constants.js";

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

const API_VERSION = process.env.API_VERSION
const PORT = process.env.PORT || 5000;

/*  ========== CORS - Setup ========== */
app.use(cors(corsOptions));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () =>
      console.log(
        colours.fg.yellow,
        `${PROJECT_NAME} API is running in ${process.env.NODE_ENV} mode on port ${PORT}`,
        colours.reset
      )
    );

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();
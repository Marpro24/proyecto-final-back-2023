import morgan from "morgan";
import express from "express";
import cors from "cors";
import app from "./app.js";
import generalError, { notFound } from "./middlewares/errors/generalError.js";
import pingRouter from "../features/ping/router/pingRouter.js";
import paintingsRouter from "../features/paintings/router/paintingsRouter.js";

const allowedOrigins = [
  process.env.ALLOWED_ORIGIN!,
  process.env.ALLOWED_ORIGIN_PROD!,
];

const options: cors.CorsOptions = { origin: allowedOrigins };

app.use(cors(options));
app.use(morgan("dev"));
app.use(express.json());

app.use("/", pingRouter);
app.use("/paintings", paintingsRouter);

app.use(notFound);
app.use(generalError);

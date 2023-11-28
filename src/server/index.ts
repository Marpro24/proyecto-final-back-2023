import morgan from "morgan";
import app from "./app.js";
import express from "express";
import cors from "cors";
import generalError, { notFound } from "./middlewares/errors/generalError.js";
import pingRouter from "../features/ping/router/pingRouter.js";

const corsPort = process.env.ALLOWED_ORIGIN;
const corsOptions = { origin: corsPort };

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());

app.use("/", pingRouter);
app.use(notFound);
app.use(generalError);

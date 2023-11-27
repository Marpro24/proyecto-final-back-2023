import morgan from "morgan";
import app from "./app.js";
import express from "express";
import cors from "cors";

const corsPort = process.env.ALLOWED_ORIGIN;
const corsOptions = { origin: corsPort };

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());

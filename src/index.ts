import "dotenv/config";
import chalk from "chalk";
import debugCreator from "debug";
import "./server/index.js";
import { startServer } from "./server/app.js";
import connectToDatabase from "./database/index.js";

const debug = debugCreator("src:final-project:main");

const port = process.env.PORT ?? 5000;

if (!process.env.MONGODB_URL) {
  debug(chalk.redBright("Missing MongoDB Connection String"));
  process.exit();
}

const mongoUrl = process.env.MONGODB_URL;

await connectToDatabase(mongoUrl);

startServer(+port);

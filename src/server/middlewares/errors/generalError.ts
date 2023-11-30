import { type NextFunction, type Request, type Response } from "express";
import "dotenv/config";
import debugCreator from "debug";
import chalk from "chalk";
import CustomError from "../../CustomError/CustomError.js";

const debug = debugCreator("src:final-project:server:middlewares:errors");

export const notFound = (_req: Request, _res: Response, next: NextFunction) => {
  const customError = new CustomError("Endpoint not found", 404);
  next(customError);
};

const generalError = (
  error: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = error.statusCode ?? 500;
  const privateError = error.privateMessage ?? " Internal server error";

  debug(chalk.redBright(`error: ${privateError}`));

  res.status(statusCode).json({ error: error.message });
};

export default generalError;

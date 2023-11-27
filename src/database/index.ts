import "dotenv/config";
import chalk from "chalk";
import debugCreator from "debug";
import mongoose from "mongoose";

const debug = debugCreator("src:final-project:database:index");

const connectToDatabase = async (mongoUrl: string) => {
  try {
    await mongoose.connect(mongoUrl);
    mongoose.set("debug", false);
    debug(chalk.greenBright("Connected to database"));
  } catch {
    debug(chalk.redBright("Not able to connect to database"));
  }
};

export default connectToDatabase;

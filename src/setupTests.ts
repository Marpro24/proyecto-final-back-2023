import "dotenv/config";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import "./server/index.js";
import connectToDatabase from "./database/index.js";

let server: MongoMemoryServer;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  const mongoDbUrl = server.getUri();
  await connectToDatabase(mongoDbUrl);
});

afterAll(async () => {
  await mongoose.disconnect();
  await server.stop();
});

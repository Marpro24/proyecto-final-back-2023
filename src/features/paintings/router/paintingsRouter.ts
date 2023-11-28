import { Router } from "express";
import PaintingsController from "../controller/PaintingsController.js";
import PaintingsMongooseRepository from "../repository/PaintingsMongooseRepository.js";
import { type PaintingsRepository } from "../repository/types";

const paintingsRouter = Router();

const paintingsRepository: PaintingsRepository =
  new PaintingsMongooseRepository();

const paintingsController = new PaintingsController(paintingsRepository);

paintingsRouter.get("/", paintingsController.getPaintings);

export default paintingsRouter;

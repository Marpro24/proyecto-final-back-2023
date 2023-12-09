import { Router } from "express";
import PaintingsController from "../controller/PaintingsController.js";
import PaintingsMongooseRepository from "../repository/PaintingsMongooseRepository.js";
import { type PaintingsRepository } from "../repository/types";
import paintingValidation from "../schema/paintingSchema.js";

const paintingsRouter = Router();

const paintingsRepository: PaintingsRepository =
  new PaintingsMongooseRepository();

const paintingsController = new PaintingsController(paintingsRepository);

paintingsRouter.get("/", paintingsController.getPaintings);
paintingsRouter.delete("/:paintingId", paintingsController.deletePainting);
paintingsRouter.post(
  "/add",
  paintingValidation,
  paintingsController.addPainting,
);
paintingsRouter.get("/:paintingId", paintingsController.getPaintingById);

export default paintingsRouter;

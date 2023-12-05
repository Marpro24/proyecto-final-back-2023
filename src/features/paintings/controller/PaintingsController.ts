import { type NextFunction, type Request, type Response } from "express";
import { type PaintingsRepository } from "../repository/types";
import CustomError from "../../../server/CustomError/CustomError.js";

class PaintingsController {
  constructor(private readonly paintingsRepository: PaintingsRepository) {}

  getPaintings = async (_req: Request, res: Response): Promise<void> => {
    const paintings = await this.paintingsRepository.getPaintings();

    res.status(200).json({ paintings });
  };

  deletePainting = async (
    req: Request<{ paintingId: string }>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { paintingId } = req.params;
    try {
      await this.paintingsRepository.deletePainting(paintingId);

      res.status(200).json({});
    } catch {
      const error = new CustomError("Error deleting this painting", 400);
      next(error);
    }
  };
}

export default PaintingsController;

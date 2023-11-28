import { type Request, type Response } from "express";
import { type PaintingsRepository } from "../repository/types";

class PaintingsController {
  constructor(private readonly paintingsRepository: PaintingsRepository) {}

  getPaintings = async (_req: Request, res: Response): Promise<void> => {
    const paintings = await this.paintingsRepository.getPaintings();

    res.status(200).json({ paintings });
  };
}

export default PaintingsController;

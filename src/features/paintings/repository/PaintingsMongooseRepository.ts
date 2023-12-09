import Painting from "../model/Painting.js";
import {
  type PaintingStructureWithoutId,
  type PaintingStructure,
} from "../types";
import { type PaintingsRepository } from "./types";

class PaintingsMongooseRepository implements PaintingsRepository {
  public async getPaintings(): Promise<PaintingStructure[]> {
    const paintings = await Painting.find().limit(10);

    return paintings;
  }

  public async deletePainting(paintingId: string): Promise<void> {
    try {
      await Painting.findByIdAndDelete(paintingId);
    } catch (error) {
      throw new Error(
        "Error deleting this painting" + (error as Error).message,
      );
    }
  }

  async addPainting(
    painting: PaintingStructureWithoutId,
  ): Promise<PaintingStructure> {
    try {
      const newPainting = await Painting.create(painting);

      return newPainting;
    } catch (error) {
      throw new Error(
        "An error occurred, please try again" + (error as Error).message,
      );
    }
  }

  async getPaintingById(id: string): Promise<PaintingStructure> {
    try {
      const painting = await Painting.findById(id);
      return painting!;
    } catch (error) {
      throw new Error(
        "An error occurred, please try again" + (error as Error).message,
      );
    }
  }
}

export default PaintingsMongooseRepository;

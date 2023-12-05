import Painting from "../model/Painting.js";
import { type PaintingStructure } from "../types";
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
}

export default PaintingsMongooseRepository;

import Painting from "../model/Painting.js";
import { type PaintingStructure } from "../types";
import { type PaintingsRepository } from "./types";

class PaintingsMongooseRepository implements PaintingsRepository {
  public async getPaintings(): Promise<PaintingStructure[]> {
    const paintings = await Painting.find().limit(10);

    return paintings;
  }
}

export default PaintingsMongooseRepository;

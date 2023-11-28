import { type PaintingStructure } from "../types";

export interface PaintingsRepository {
  getPaintings: () => Promise<PaintingStructure[]>;
}

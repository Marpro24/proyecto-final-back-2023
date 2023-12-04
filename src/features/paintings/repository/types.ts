import { type PaintingStructure } from "../types";

export interface PaintingsRepository {
  getPaintings: () => Promise<PaintingStructure[]>;
  deletePainting: (paintingId: string) => Promise<void>;
}

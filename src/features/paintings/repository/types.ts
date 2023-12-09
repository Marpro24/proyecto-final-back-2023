import {
  type PaintingStructureWithoutId,
  type PaintingStructure,
} from "../types";

export interface PaintingsRepository {
  getPaintings: () => Promise<PaintingStructure[]>;
  deletePainting: (paintingId: string) => Promise<void>;
  addPainting: (
    painting: PaintingStructureWithoutId,
  ) => Promise<PaintingStructure>;
  getPaintingById: (paintingId: string) => Promise<PaintingStructure>;
}

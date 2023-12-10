import { type Request } from "express";

export interface PaintingStructure {
  _id: string;
  authorInfo: string;
  image: string;
  imageDescription: string;
  name: string;
  price: number;
  title: string;
  year: number;
}

export type PaintingStructureWithoutId = Omit<PaintingStructure, "_id">;

export type PaintingRequestWithoutId = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  PaintingStructureWithoutId
>;

export type PaintingRequestWithId = Request<
  { paintingId: string },
  Record<string, unknown>,
  PaintingStructure
>;

export type PaintingRequestById = Request<{ paintingId: string }>;

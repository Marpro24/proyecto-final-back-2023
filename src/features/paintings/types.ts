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

export interface PaintingStructureWithoutId {
  authorInfo: string;
  image: string;
  imageDescription: string;
  name: string;
  price: number;
  title: string;
  year: number;
}

export type PaintingRequestWithoutId = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  PaintingStructureWithoutId
>;

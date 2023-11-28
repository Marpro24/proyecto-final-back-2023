import { Schema, model } from "mongoose";
import { type PaintingStructure } from "../types";

const PaintingSchema = new Schema<PaintingStructure>({
  authorInfo: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  imageDescription: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

const Painting = model("Painting", PaintingSchema, "la-galerie");

export default Painting;

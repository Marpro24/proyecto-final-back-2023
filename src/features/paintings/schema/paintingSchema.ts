import { Joi, validate } from "express-validation";
import { type PaintingStructureWithoutId } from "../types";

const paintingSchema = {
  body: Joi.object<PaintingStructureWithoutId>({
    authorInfo: Joi.string().required(),
    image: Joi.string().required(),
    imageDescription: Joi.string().required(),
    name: Joi.string().required(),
    price: Joi.number().required(),
    title: Joi.string().required(),
    year: Joi.number().required(),
  }),
};

const paintingValidation = validate(paintingSchema, {}, { abortEarly: false });

export default paintingValidation;

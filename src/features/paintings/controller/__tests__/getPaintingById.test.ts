import { type NextFunction, type Response } from "express";
import type PaintingsMongooseRepository from "../../repository/PaintingsMongooseRepository";
import paintingsMock from "../../mocks/paintingsMock";
import PaintingsController from "../PaintingsController";
import { type PaintingRequestById } from "../../types";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a PaintingsController getPaintingById method", () => {
  const req: Pick<PaintingRequestById, "params"> = {
    params: { paintingId: "6564d084ab6e912be5400b16" },
  };
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  };
  const next: NextFunction = jest.fn();

  describe("When it receives a request with a painting id and a response", () => {
    const paintingsRepository: Pick<
      PaintingsMongooseRepository,
      "getPaintingById"
    > = {
      getPaintingById: jest.fn().mockResolvedValue(paintingsMock),
    };

    const paintingsController = new PaintingsController(
      paintingsRepository as PaintingsMongooseRepository,
    );

    test("Then it should call its response status method with the status code 200", async () => {
      const expectedStatusCode = 200;

      await paintingsController.getPaintingById(
        req as PaintingRequestById,
        res as Response,
        next,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call it json method with the painting Boys who swim", async () => {
      const painting = paintingsMock;

      await paintingsController.getPaintingById(
        req as PaintingRequestById,
        res as Response,
        next,
      );

      expect(res.json).toHaveBeenCalledWith({ painting });
    });
  });
});

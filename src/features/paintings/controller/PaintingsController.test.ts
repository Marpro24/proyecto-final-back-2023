import { type Request, type Response } from "express";
import paintingsMock from "../../mocks/paintingsMock";
import { type PaintingsRepository } from "../repository/types";
import PaintingsController from "./PaintingsController";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a PaintingsController's getPaintings method", () => {
  const paintingsRepository: Pick<PaintingsRepository, "getPaintings"> = {
    getPaintings: jest.fn().mockReturnValue(paintingsMock),
  };
  const req = {};
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockResolvedValue(paintingsMock),
  };

  describe("When it receives a response", () => {
    test("Then it should call its method status with the status code 200", async () => {
      const expectedSatusCode = 200;

      const paintingsController = new PaintingsController(
        paintingsRepository as PaintingsRepository,
      );
      await paintingsController.getPaintings(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedSatusCode);
    });

    test("Then it should call its method json with Boys who swim, Untitled, Stuck on you, Barticaborn", async () => {
      const expectedPaintings = paintingsMock;

      const paintingsController = new PaintingsController(
        paintingsRepository as PaintingsRepository,
      );
      await paintingsController.getPaintings(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({ paintings: expectedPaintings });
    });
  });
});

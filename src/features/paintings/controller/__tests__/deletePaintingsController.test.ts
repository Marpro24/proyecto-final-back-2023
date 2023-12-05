import { type NextFunction, type Request, type Response } from "express";
import { type PaintingsRepository } from "../../repository/types";
import PaintingsController from "../PaintingsController";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a PaintinsController deletePaintings method", () => {
  const paintingsRepository: Pick<PaintingsRepository, "deletePainting"> = {
    deletePainting: jest.fn().mockReturnValue({}),
  };
  const req: Pick<Request, "params"> = {
    params: { _id: "6564d103ab6e912be5400b19" },
  };
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockResolvedValue({}),
  };
  const next: NextFunction = jest.fn();

  describe("When it receives a response", () => {
    test("Then it should call its method status with 200", async () => {
      const expectedStatus = 200;
      const paintingsController = new PaintingsController(
        paintingsRepository as PaintingsRepository,
      );

      await paintingsController.deletePainting(
        req as Request<{ paintingId: string }>,
        res as Response,
        next,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call its method json with an empty object", async () => {
      const expectedEmptyObject = {};

      const paintingsController = new PaintingsController(
        paintingsRepository as PaintingsRepository,
      );

      await paintingsController.deletePainting(
        req as Request<{ paintingId: string }>,
        res as Response,
        next,
      );

      expect(res.json).toHaveBeenCalledWith(expectedEmptyObject);
    });
  });
});

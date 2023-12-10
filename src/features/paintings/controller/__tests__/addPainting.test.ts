import { type NextFunction, type Response } from "express";
import { type PaintingRequestWithoutId } from "../../types";
import type PaintingsMongooseRepository from "../../repository/PaintingsMongooseRepository";
import PaintingsController from "../PaintingsController";
import { paintingMock } from "../../mocks/paintingMock";
import type CustomError from "../../../../server/CustomError/CustomError";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a PaintingsController addPainting method", () => {
  describe("When it receives a request with a painting without id", () => {
    const req: Pick<PaintingRequestWithoutId, "body"> = {
      body: paintingMock,
    };

    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };

    const next: NextFunction = jest.fn();

    const paintingsRepository: PaintingsMongooseRepository = {
      getPaintings: jest.fn(),
      deletePainting: jest.fn(),
      addPainting: jest.fn().mockResolvedValue({ paintingMock }),
      getPaintingById: jest.fn(),
      modifyPainting: jest.fn(),
    };

    test("Then it should call its status method with the status code 201", async () => {
      const paintingController = new PaintingsController(paintingsRepository);

      await paintingController.addPainting(
        req as PaintingRequestWithoutId,
        res as Response,
        next,
      );

      expect(res.status).toHaveBeenCalledWith(201);
    });

    test("Then it should call its json method with Barticaborn", async () => {
      const paintingController = new PaintingsController(paintingsRepository);

      await paintingController.addPainting(
        req as PaintingRequestWithoutId,
        res as Response,
        next,
      );

      expect(res.json).toHaveBeenCalledWith({ painting: { paintingMock } });
    });

    test("Then if it is an invalid request, it should call the next function with its error status 400 and the message An error occurred, please try again ", async () => {
      const paintingsRepository: PaintingsMongooseRepository = {
        getPaintings: jest.fn(),
        deletePainting: jest.fn(),
        addPainting: jest.fn().mockRejectedValue(undefined),
        getPaintingById: jest.fn(),
        modifyPainting: jest.fn(),
      };

      const expectedError: Partial<CustomError> = {
        message: "An error occurred, please try again",
        statusCode: 400,
      };

      const paintingController = new PaintingsController(paintingsRepository);

      await paintingController.addPainting(
        req as PaintingRequestWithoutId,
        res as Response,
        next,
      );

      expect(next).toHaveBeenCalledWith(expect.objectContaining(expectedError));
    });
  });
});

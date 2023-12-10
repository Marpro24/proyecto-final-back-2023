import { type NextFunction, type Response } from "express";
import paintingsMock from "../../mocks/paintingsMock";
import { type PaintingRequestWithId } from "../../types";
import modifiedPaintingMock from "../../mocks/modifiedPaintingMock";
import PaintingsController from "../PaintingsController";
import type PaintingsMongooseRepository from "../../repository/PaintingsMongooseRepository";
import type CustomError from "../../../../server/CustomError/CustomError";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a PAintingController's modifyPainting method", () => {
  const req: Pick<PaintingRequestWithId, "body" | "params"> = {
    body: paintingsMock[1],
    params: { paintingId: "6564d0f8ab6e912be5400b17" },
  };
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const next: NextFunction = jest.fn();

  describe("When it receives a request with a painting id '6564d0f8ab6e912be5400b17', and a price of 3000 and a response", () => {
    const paintingRepository: Pick<
      PaintingsMongooseRepository,
      "modifyPainting"
    > = {
      modifyPainting: jest.fn().mockResolvedValue(modifiedPaintingMock),
    };

    test("Then it should call the response's status method with 200", async () => {
      const expectedStatusCode = 200;

      const paintingsController = new PaintingsController(
        paintingRepository as PaintingsMongooseRepository,
      );

      await paintingsController.modifyPainting(
        req as PaintingRequestWithId,
        res as Response,
        next,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's json method with the price modified to 3000€", async () => {
      const paintingsController = new PaintingsController(
        paintingRepository as PaintingsMongooseRepository,
      );

      await paintingsController.modifyPainting(
        req as PaintingRequestWithId,
        res as Response,
        next,
      );

      expect(res.json).toHaveBeenCalledWith({ painting: modifiedPaintingMock });
    });
  });

  describe("When it receives a request with a painting id, a painting and a response and there is an error", () => {
    test("Then it should call its next function with a custom error 'An error occurred, please try again'", async () => {
      const expectedStatusCode = 400;
      const expectedErrorMessage = "An error occurred, please try again";
      const expectedError: Pick<CustomError, "statusCode" | "message"> = {
        statusCode: expectedStatusCode,
        message: expectedErrorMessage,
      };

      const paintingsRepository: Pick<
        PaintingsMongooseRepository,
        "modifyPainting"
      > = {
        modifyPainting: jest.fn().mockRejectedValue(null),
      };

      const paintingsController = new PaintingsController(
        paintingsRepository as PaintingsMongooseRepository,
      );

      await paintingsController.modifyPainting(
        req as PaintingRequestWithId,
        res as Response,
        next,
      );

      expect(next).toHaveBeenCalledWith(expect.objectContaining(expectedError));
    });
  });
});

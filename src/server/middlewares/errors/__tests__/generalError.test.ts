import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../../../CustomError/CustomError";
import generalError from "../generalError";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a generalError function", () => {
  const req = {};
  const res: Pick<Response, "json" | "status"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  };
  const next = jest.fn();

  describe("When it receives a response and an error with a status code", () => {
    test("Then it should call the response's method with a 404", () => {
      const errorMessage = "Endpoint not found";
      const expectedStatusCode = 404;
      const error = new CustomError(errorMessage, expectedStatusCode);

      generalError(
        error,
        req as Request,
        res as Response,
        next as NextFunction,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
    describe("When it receives an error without a status code and a response", () => {
      test("Then it should call the status method of the response with a 500", () => {
        const expectedError = new Error("Error without a status code");
        const expectedStatusCode = 500;

        generalError(
          expectedError as CustomError,
          req as Request,
          res as Response,
          next as NextFunction,
        );

        expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
      });
    });

    describe("When it receives a response with an error message", () => {
      test("Then it should call the json methid of the response with a 'General Error'", () => {
        const expectedStatusCode = 400;
        const errorMessage = "general error";
        const error = new CustomError(errorMessage, expectedStatusCode);

        generalError(
          error,
          req as Request,
          res as Response,
          next as NextFunction,
        );

        const errorResponseBody = {
          error: errorMessage,
        };

        expect(res.json).toHaveBeenCalledWith(errorResponseBody);
      });
    });
  });
});

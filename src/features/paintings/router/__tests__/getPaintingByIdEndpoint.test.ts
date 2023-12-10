import request from "supertest";

import app from "../../../../server/app";
import paintingsMock from "../../mocks/paintingsMock";
import Painting from "../../model/Painting";
import { type PaintingStructure } from "../../types";

describe("Given a GET method with a /paintings/:paintingId endpoint", () => {
  describe("When it receives a request with the Boys who swim id", () => {
    test("Then it should respond with the status code 200 and the painting Boys who swim", async () => {
      const path = "/paintings/6564d084ab6e912be5400b16";
      const expectedStatusCode = 200;
      const expectedPainting = "Boys who swim";

      await Painting.create(paintingsMock[0]);

      const response = await request(app).get(path).expect(expectedStatusCode);

      const responseBody = response.body as { painting: PaintingStructure };

      expect(responseBody.painting).toHaveProperty("title", expectedPainting);
    });
  });

  describe("When it receives a request with an invalid id", () => {
    test("Then it should respond with the status code 400 and the error message 'An error occurred, please try again'", async () => {
      const invalidPath = "/paintings/kkckccfkfkf";
      const expectedStatusCode = 400;
      const expectedError = { error: "An error occurred, please try again" };

      const response = await request(app)
        .get(invalidPath)
        .expect(expectedStatusCode);

      const responseBody = response.body as { error: PaintingStructure };

      expect(responseBody).toStrictEqual(expectedError);
    });
  });
});

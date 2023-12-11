import request from "supertest";
import modifiedPaintingMock from "../../mocks/modifiedPaintingMock";
import { type PaintingStructure } from "../../types";
import app from "../../../../server/app";
import Painting from "../../model/Painting";

describe("Given a PATCH /paintings/6564d0f8ab6e912be5400b17 endpoint", () => {
  describe("When it receives a request with a valid id '6564d0f8ab6e912be5400b17'", () => {
    test("Then it should respond with a status 200 and the price of the Untitled painting modified", async () => {
      const path = "/paintings/6564d0f8ab6e912be5400b17";
      const expectedStatusCode = 200;
      const expectedNewPrice = 3000;

      await Painting.create(modifiedPaintingMock);

      const response = await request(app)
        .patch(path)
        .expect(expectedStatusCode);
      const responseBody = response.body as { painting: PaintingStructure };

      expect(responseBody.painting).toHaveProperty("price", expectedNewPrice);
    });
  });
});

describe("When it receives a request with an invalid id", () => {
  test("Then it should respond with a status code 400 and the error message 'An error occurred, please try again'", async () => {
    const path = "/paintings/6564d";
    const expectedStatusCode = 400;
    const expectedError = { error: "An error occurred, please try again" };

    const response = await request(app).patch(path).expect(expectedStatusCode);

    const responseBody = response.body as { error: PaintingStructure };

    expect(responseBody).toStrictEqual(expectedError);
  });
});

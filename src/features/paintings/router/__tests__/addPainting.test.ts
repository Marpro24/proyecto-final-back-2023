import request from "supertest";
import app from "../../../../server/app";
import { paintingMock } from "../../mocks/paintingMock";
import "../../../../server/index";
import { type PaintingStructure } from "../../types";
import { server } from "../../../../setupTests";

describe("Given a POST/ paintings/add endpoint", () => {
  const path = "/paintings/add";

  describe("When it receives a request with a new Frank Bowling painting", () => {
    test("Then it should respond with a status code 201 and the new Frank Bowling painting", async () => {
      const expectedStatusCode = 201;
      const newTitle = "Frank Bowling";

      const response = await request(app)
        .post(path)
        .send(paintingMock)
        .expect(expectedStatusCode);

      const responseBody = response.body as { painting: PaintingStructure };

      expect(responseBody.painting).toHaveProperty("name", newTitle);
    });
  });

  describe("When it receives an invalid request", () => {
    test("Then it should respond with the status code 404 and the error messge 'An error occurred, please try again'", async () => {
      await server.stop();

      const expectedStatusCode = 400;
      const expectedError = { error: "An error occurred, please try again" };

      const response = await request(app)
        .post(path)
        .send(paintingMock)
        .expect(expectedStatusCode);

      const responseBody = response.body as { error: string };

      expect(responseBody).toStrictEqual(expectedError);
    });
  });
});

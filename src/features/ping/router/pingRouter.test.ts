import request from "supertest";
import app from "../../../server/app";
import "../../../setupTest";

describe("Given a get method with a '/' endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should respond with a '🏓' message", async () => {
      const expectedMessage = "🏓";
      const expectedStatusCode = 200;
      const path = "/";

      const response = await request(app).get(path).expect(expectedStatusCode);

      expect(response.body).toStrictEqual({ message: expectedMessage });
    });
  });
});

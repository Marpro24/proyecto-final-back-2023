import request from "supertest";
import app from "../app";
import "../index.js";

describe("Given a GET /gallery endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should respond with a 404 and an 'Endpoint not found' message", async () => {
      const expectedStatus = 404;
      const expectedMessage = "Endpoint not found";
      const requestedPath = "/gallery";

      const response = await request(app)
        .get(requestedPath)
        .expect(expectedStatus);

      expect(response.body).toHaveProperty("error", expectedMessage);
    });
  });
});

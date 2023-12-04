import request from "supertest";
import app from "../../../../server/app";
import "../../../../server/app";

describe("Given a DELETE/painting endpoint", () => {
  describe("When it receives a valid request", () => {
    test("Then it should respond with the status code 200 and an empty object", async () => {
      const expectedStatusCode = 200;
      const path = "/paintings/6564d103ab6e912be5400b19";

      const response = await request(app)
        .delete(path)
        .expect(expectedStatusCode);

      expect(response.body).toStrictEqual({});
    });
  });

  describe("When it receives an invalid request", () => {
    test("Then it should respond with the status code 400 and the error message 'Error deleting this painting'", async () => {
      const expectedStatusCode = 400;
      const expectedErrorMessage = "Error deleting this painting";
      const invalidPath = "/paintings/6564d103ab6e912be540044";

      const response = await request(app)
        .delete(invalidPath)
        .expect(expectedStatusCode);

      expect(response.body).toHaveProperty("error", expectedErrorMessage);
    });
  });
});

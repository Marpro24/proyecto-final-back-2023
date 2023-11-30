import request from "supertest";
import paintingsMock from "../mocks/paintingsMock";
import Painting from "../model/Painting";
import { type PaintingStructure } from "../types";
import app from "../../../server/app";
import "../../../server/index";
import "../../../setupTest";

describe("Given a GET/paintings endpoint", () => {
  describe("When it recives a valid reuest", () => {
    test("Then it should respond with the status code 200 and the paintings 'Boys who swim', 'Untitled', 'Stuck on you', 'Barticaborn'", async () => {
      const expectedStatusCose = 200;
      const path = "/paintings";
      await Painting.create(paintingsMock[0]);
      await Painting.create(paintingsMock[1]);
      await Painting.create(paintingsMock[2]);
      await Painting.create(paintingsMock[3]);

      const response = await request(app).get(path).expect(expectedStatusCose);
      const responseBody = response.body as { paintings: PaintingStructure[] };

      responseBody.paintings.forEach((painting, paintingPosition) => {
        expect(painting).toHaveProperty(
          "title",
          paintingsMock[paintingPosition].title,
        );
      });
    });
  });
});

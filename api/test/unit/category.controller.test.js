const categoryController = require("../../routes/api/category");
const categoryModel = require("../../models/Category");

categoryModel.create = jest.fn();

describe("Sample Test", () => {
  it("should test that true === true", () => {
    expect(true).toBe(true);
  });
  it("Testing to see if Jest works", () => {
    expect(1).toBe(1);
  });
});

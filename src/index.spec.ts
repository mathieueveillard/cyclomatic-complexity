import positive from ".";

test("should behave as the identity function for positive numbers", () => {
  expect(positive(10)).toEqual(10);
});

import positive from ".";

test("should behave as the identity function for positive numbers", () => {
  expect(positive(1)).toEqual(1);
});

test("should return 0 for negative numbers", () => {
  expect(positive(-1)).toEqual(0);
});

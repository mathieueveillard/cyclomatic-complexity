import { positive, twist } from ".";

describe("A single test achieves 100% code coverage…", () => {
  test("n > 0", () => {
    expect(positive(1)).toEqual(1);
  });

  // test("n < 0", () => {
  //   expect(positive(-1)).toEqual(0);
  // });
});

describe("Two tests achieve 100% code coverage…", () => {
  test("n < 0", () => {
    expect(twist(-2)).toEqual(-2);
  });

  test("n > 1", () => {
    expect(twist(2)).toEqual(2);
  });

  // test("0 <= n < 1", () => {
  //   expect(twist(0.5)).toEqual(-0.5);
  // });
});

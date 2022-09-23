const { retChar } = require("../problems/problem2");

describe("Return (n) Character From A String", () => {
  test(`Should return "Missing Arguments" if called without args`, () => {
    expect(retChar()).toBe("Missing Arguments");
  });

  test(`Should return "a" when passed "car" and 2`, () => {
    expect(retChar("car", 2)).toBe("a");
  });

  test(`Should not return "c" when passed "car" and 2`, () => {
    expect(retChar("car", 2)).not.toBe("c");
  });

  test(`Should have length of 1 when passed "car" and 2`, () => {
    expect(retChar("car", 2).length).toBe(1);
  });

  test(`Should not have length of 2 when passed "car" and 2`, () => {
    expect(retChar("car", 2).length).not.toBe(2);
  });
});

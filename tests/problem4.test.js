const { retObjKeyVal } = require("../problems/problem4");

describe("Return Object Key Value", () => {
  test(`Should return "Missing Arguments" if called without args`, () => {
    expect(retObjKeyVal()).toBe("Missing Arguments");
  });

  test(`Should return "Andy Jacko" when passed {name: "Andy Jacko", age: 46}, "name"`, () => {
    expect(retObjKeyVal({ name: "Andy Jacko", age: 46 }, "name")).toBe(
      "Andy Jacko"
    );
  });

  test(`Should not return 46 when passed {name: "Andy Jacko", age: 46}, "name"`, () => {
    expect(retObjKeyVal({ name: "Andy Jacko", age: 46 }, "name")).not.toBe(46);
  });
});

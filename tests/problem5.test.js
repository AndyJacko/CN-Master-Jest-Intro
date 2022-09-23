const { chkObjProperty } = require("../problems/problem5");

describe("Check Object Property Exists And Is Truthy", () => {
  test(`Should return "Missing Arguments" if called without args`, () => {
    expect(chkObjProperty()).toBe("Missing Arguments");
  });

  test(`Should return true when passed {a:1, b:2, c:3}, "b"`, () => {
    expect(chkObjProperty({ a: 1, b: 2, c: 3 }, "b")).toBe(true);
  });

  test(`Should return false when passed { one: "a", two: "b", three: "c" }, "b"`, () => {
    expect(chkObjProperty({ one: "a", two: "b", three: "c" }, "b")).toBe(false);
  });

  test(`Should return true when passed {name:"Andy", sex:"Male", age:46}, "name"`, () => {
    expect(chkObjProperty({ name: "Andy", sex: "Male", age: 46 }, "name")).toBe(
      true
    );
  });

  test(`Should return false when passed {name:"Andy", sex:"Male", age:null}, "age"`, () => {
    expect(
      chkObjProperty({ name: "Andy", sex: "Male", age: null }, "age")
    ).toBe(false);
  });
});

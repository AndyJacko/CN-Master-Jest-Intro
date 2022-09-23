const { retArrayElements } = require("../problems/problem3");

describe("Return (n) Elements From End Of Array", () => {
  test(`Should return "Missing Arguments" if called without args`, () => {
    expect(retArrayElements()).toBe("Missing Arguments");
  });

  test(`Should return ["Ringo","Paul"] when passed ["John","George","Ringo","Paul"] and 2`, () => {
    expect(retArrayElements(["John", "George", "Ringo", "Paul"], 2)).toEqual(
      expect.arrayContaining(["Ringo", "Paul"])
    );
  });

  test(`Should Not return ["John","George"] when passed ["John","George","Ringo","Paul"] and 2`, () => {
    expect(
      retArrayElements(["John", "George", "Ringo", "Paul"], 2)
    ).not.toEqual(expect.arrayContaining(["John", "George"]));
  });

  test(`Should return length of 2 when passed ["John","George","Ringo","Paul"] and 2`, () => {
    expect(
      retArrayElements(["John", "George", "Ringo", "Paul"], 2).length
    ).toBe(2);
  });

  test(`Should not return length of 4 when passed ["John","George","Ringo","Paul"] and 2`, () => {
    expect(
      retArrayElements(["John", "George", "Ringo", "Paul"], 2).length
    ).not.toBe(4);
  });
});

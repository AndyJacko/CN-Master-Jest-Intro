const { longestWord } = require("../problems/problem1");

describe("Longest Word Function", () => {
  test("Should return longest word in an array", () => {
    expect(longestWord(["Dog", "Mouse", "Elephant", "Spider", "Ant"])).toBe(
      "Elephant"
    );
  });

  test("Should not return shortest word in an array", () => {
    expect(longestWord(["Dog", "Mouse", "Elephant", "Spider", "Ant"])).not.toBe(
      "Ant"
    );
  });

  test("Should have returned word length of 8", () => {
    expect(
      longestWord(["Dog", "Mouse", "Elephant", "Spider", "Ant"])
    ).toHaveLength(8);
  });
});

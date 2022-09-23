const { chkDatesWithinHour } = require("../problems/problem6");

describe("Check Two Dates Are Within An Hour Of Each Other", () => {
  test(`Should return "Missing Arguments" if called without args`, () => {
    expect(chkDatesWithinHour()).toBe("Missing Arguments");
  });

  test(`Should return true when passed "2022/09/23 08:00:00", "2022/09/23 08:30:00"`, () => {
    expect(
      chkDatesWithinHour("2022/09/23 08:00:00", "2022/09/23 08:30:00")
    ).toBe(true);
  });

  test(`Should return true when passed "2000/09/23 23:30:00", "2000/09/24 00:30:00"`, () => {
    expect(
      chkDatesWithinHour("2000/09/23 23:30:00", "2000/09/24 00:30:00")
    ).toBe(true);
  });

  test(`Should return false when passed "2000/09/23 08:00:00", "2000/09/23 10:00:00"`, () => {
    expect(
      chkDatesWithinHour("2000/09/23 08:00:00", "2000/09/23 10:00:00")
    ).toBe(false);
  });

  test(`Should return false when passed "2000/09/23 00:00:00", "2000/09/24 00:00:00"`, () => {
    expect(
      chkDatesWithinHour("2000/09/23 00:00:00", "2000/09/24 00:00:00")
    ).toBe(false);
  });
});

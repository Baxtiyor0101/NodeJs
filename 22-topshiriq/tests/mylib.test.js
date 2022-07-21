const mylip = require("../mylip");
describe("absolute", () => {
  it(" should return a positive number ifinput is positive", () => {
    const result = mylip.absalute(1);
    expect(result).toBe(1);
  });

  it(" should return a positive number ifinput is negative", () => {
    const result = mylip.absalute(-1);
    expect(result).toBe(1);
  });

  it(" should return zero ifinput is positive", () => {
    const result = mylip.absalute(0);
    expect(result).toBe(0);
  });
});

describe("salom", () => {
  it("should return greeting message", () => {
    const result = mylip.salom("Baxtiyor");
    // expect(result).toContain("Baxtiyor");
    expect(result).toMatch(/Baxtiyor/);
  });
});

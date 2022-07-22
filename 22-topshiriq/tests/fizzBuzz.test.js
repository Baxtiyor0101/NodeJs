const fizzBuzz = require("../fizzBuzz");
describe("FizzBuzz", () => {
  it("should return an error if it is not a number", () => {
    expect(() => {
      fizzBuzz.FizzBuzz("k");
    }).toThrow();
  });
  it("should return Fizz if 3 divivision is true", () => {
    const result = fizzBuzz.FizzBuzz(9);
    expect(result).toContain("Fizz");
  });
  it("should return Buzz if 5 divivision is true", () => {
    const result = fizzBuzz.FizzBuzz(10);
    expect(result).toContain("Buzz");
  });
  it("should return FizzBuzz if 3 and 5 divivision is true", () => {
    const result = fizzBuzz.FizzBuzz(15);
    expect(result).toContain("FizzBuzz");
  });
  it("should return input if 3 and 5 divivision are not true", () => {
    const result = fizzBuzz.FizzBuzz(11);
    expect(result).toBe(11);
  });
});

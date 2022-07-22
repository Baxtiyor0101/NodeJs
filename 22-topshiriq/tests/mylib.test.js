const db = require("../db");
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

describe("getCurrencies", () => {
  it("should return default  currencies", () => {
    const result = mylip.getCurrencies();

    //ota umumiy
    expect(result).toBeDefined();
    expect(result).not.toBeNull();

    // o'ta aniq bo'lgan test
    expect(result[0]).toBe("UZS");
    expect(result[1]).toBe("MYR");
    expect(result[2]).toBe("TRY");
    expect(result.length).toBe(3);

    //to'g'ri yozilga test
    expect(result).toContain("UZS");
    expect(result).toContain("TRY");
    expect(result).toContain("MYR");
    expect(result).toEqual(expect.arrayContaining(["MYR", "UZS", "TRY"]));
  });
});

describe("getProduct", () => {
  it("should return the product the given id", () => {
    const result = mylip.getProduct(11);
    expect(result).toEqual({ id: 11, title: "banana", price: 2 });

    expect(result).toMatchObject({ id: 11, price: 2 });
    expect(result).toHaveProperty("price", 2);
  });
});

describe("registeruser", () => {
  it("should throw error if username id falsy", () => {
    //null undefined notANumber 0 '' false, nan
    const falsyItems = [null, undefined, 0, "", false, NaN];
    falsyItems.forEach((fi) => {
      expect(() => {
        mylip.registeruser(fi);
      }).toThrow();
    });
  });

  it("should return a user object if value username is passed", () => {
    const user = mylip.registeruser("admin");
    expect(user).toMatchObject({ userName: "admin" });
    expect(user.id).toBeGreaterThan(0);
  });
});

describe("applyDiscount", () => {
  it("should apply 10% discount if customer has more than 100 points", () => {
    db.getCustomer = function (customerId) {
      console.log("mijozni olishni mock qildik");
      return { id: customerId, points: 101 };
    };

    const order = { customerId: 7, price: 100, totalPrice: 100 };
    mylip.applyDiscount(order);
    expect(order.totalPrice).toBe(90);
  });

  it("should not apply any discount if customer has less than 100 points", () => {
    db.getCustomer = function (customerId) {
      console.log("mijozni olishni mock qildik");
      return { id: customerId, points: 55 };
    };

    const order = { customerId: 7, price: 100, totalPrice: 100 };
    mylip.applyDiscount(order);
    expect(order.totalPrice).toBe(100);
  });
});

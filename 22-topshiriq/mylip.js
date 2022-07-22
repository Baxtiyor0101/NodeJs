const db = require("./db");

// sonlarni test qilish -- mutlaq qiymatini topish kk
module.exports.absalute = function (number) {
  return number >= 0 ? number : -number;
};

// Matnlrni test qilish
module.exports.salom = function (name) {
  return "Assalomu alaykum hammaga, " + name;
};

// Qatorlarni test qilish
module.exports.getCurrencies = function () {
  return ["UZS", "MYR", "TRY"];
};

//Objectlarni test qilish
module.exports.getProduct = function (productid) {
  return { id: productid, title: "banana", price: 2 };
};

// Xatolarni test qilish
module.exports.registeruser = function (userName) {
  if (!userName) {
    throw new Error("userName is requared please enter your userName");
  }
  return { id: 11, userName: userName };
};

// mock functionlarni test qilish
module.exports.applyDiscount = function (order) {
  const customer = db.getCustomer(order.customerId);
  if (customer.points > 100) {
    order.totalPrice = order.price - order.price * 0.1;
  }
};

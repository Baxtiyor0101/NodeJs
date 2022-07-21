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

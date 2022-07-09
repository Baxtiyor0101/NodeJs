function log(req, res, next) {
  console.log("logger yoziish");
  next();
}

module.exports = log;

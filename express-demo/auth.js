function auth(req, res, next) {
  console.log("Authentifiaction qilish");
  next();
}

module.exports = auth;

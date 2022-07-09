const express = require("express");
const app = express();
const auth = require("./auth");
const helmet = require("helmet");
const morgan = require("morgan");
const config = require("config");

const books = require("./routes/books");
const home = require("./routes/home");

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log("Logger ishlayapti");
}

console.log(config.get("name"));
console.log(config.get("mailserver.host"));
// console.log(config.get("mailserver.password"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use(logger);
app.set("view engine", "pug");
app.use(auth);
app.use(helmet());
app.use(morgan("tiny"));
app.use("/api/books", books);
app.use("/", home);

const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`${port} inchi portni eshitishni boshlaidm ...`);
});

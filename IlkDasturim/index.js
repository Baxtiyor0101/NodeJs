// const fs = require("fs");

// console.log(
//   fs.readdir("../..//kl;kl;k;lkj;lkj;lkjljlklklkl///", function (err, files) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(files);
//     }
//   })
// );

// console.log(
//   fs.readFile("./index.js", "utf8", function (err, fileContent) {
//     if (err) {
//       throw err;
//     }
//     // console.log(err);
//     console.log(fileContent);
//   })
// );

// console.log(fs.writeFile());

// let data = "this is the best data for writefilr in node js for me ";
// let writtnnnn = fs.writeFile("./index.js", data, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("the file written successifully");
//     console.log("the written succes has the following contents");
//     console.log(fs.readFileSync("nodes.txt", "utf8"));
//   }
// });

// console.log(writtnnnn);

// import { rename } from 'fs';

// let rename = fs.rename("./index.js", "pindex.js", (err) => {
//   if (err) throw err;
//   console.log("Rename complete!");
// });

// rename();

// const EventEmitter = require("events");
// const emitter = new EventEmitter();
// emitter.on("messageLogging", (arg) => {
//   console.log(
//     "",
//     arg
//   );
// });

// emitter.emit("messageLogging", {
//   id: 1,
//   message: "Alloh bilguvchidir  ",
//   about: "this is the best text  ",
// });
/////////////////////////////////////
// const Logger = require("./logger");
// const logger = new Logger();

// logger.on("messageLogging", (arg) => {
//   console.log("listener chaqirildi ");
// });

// logger.log("message");
///////////////////////////////////////////

// /HTTP  modul bilan ishlash

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Asosiy sahifa ");
    res.end();
  }
  if (req.url === "/api/books") {
    res.write(JSON.stringify(["respose", "Abdulquddus", "Jasur", "Jamshid"]));
    res.end();
  }
});
// server.on("commection", (socket) => {d
//   console.log("yangi boglanish...");
// });
server.listen(8000);
console.log(`${server.address().port}  ni portni eshitishni boshladik`);

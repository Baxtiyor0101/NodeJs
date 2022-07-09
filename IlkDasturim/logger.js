const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    this.emit("messageLogging", { id: 1, url: "https://wewewe" });
  }
}

module.exports = Logger;

// logger.js
const fs = require("fs");
const path = require("path");

const logFile = path.join(__dirname, "logs.txt");

const logMessage = (message) => {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${message}\n`;

  fs.appendFile(logFile, logEntry, (err) => {
    if (err) console.error("Error writing to log file:", err);
  });
};

module.exports = { logMessage };

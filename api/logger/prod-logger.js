const winston = require("winston");
const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, errors, json } = format;

function buildProdLogger() {
  return createLogger({
    format: combine(timestamp(), errors({ stack: true }), json()),
    defaultMeta: { service: "user-service" },
    transports: [
      new transports.File({
        filename: "info.log",
        level: "debug",
      }),
    ],
  });
}

module.exports = buildProdLogger;

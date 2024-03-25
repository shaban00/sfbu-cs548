import winston, { createLogger, format } from "winston";
import { DateTime } from "luxon";

//  Custom log format function
const customLogFormat = format.printf(({ level, message }) => {
  // Format the current timestamp using Luxon
  const timestamp = DateTime.now().toFormat("yyyy-MM-dd HH:mm:ss");
  // Return the formatted log message
  return `time: ${timestamp} level: ${level} message: ${message}`;
});

// Logger configuration
const logger = createLogger({
  level: "info", // Logging level
  format: format.json(), // Log format (JSON)
  transports: [
    // Log to the console
    new winston.transports.Console({
      format: format.combine(
        format.colorize(), // Add colors
        customLogFormat
      ),
    }),
    // Optionally, log to a file
    new winston.transports.File({ filename: "logfile.log" }),
  ],
});

export default logger;

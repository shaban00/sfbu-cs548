import logger from "../utils/logger.js";

// Create a custom middleware function to use the logger in Express
const customLogger = (req, res, next) => {
  // Log the request details
  logger.info(`method: ${req.method} url: ${req.url} ip: ${req.ip}`);

  next();
};

export default customLogger;

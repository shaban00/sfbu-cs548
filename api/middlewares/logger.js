import logger from "../utils/logger.js";

// Create a custom middleware function to use the logger in Express
const customLogger = (req, res, next) => {
  // Log the request details
  logger.info(`${req.method} ${req.url}`);

  // Move to the next middleware
  next();
};

export default customLogger;

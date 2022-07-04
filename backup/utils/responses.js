import logger from "./logger";

const returnSuccess = (status = 200, origin, data, message) => {
  logger.info(`[Server] ${origin}: ${message}`);
  
  return {
    status,
    data,
    message
  };
};

const returnError = (status = 200, origin, data, message) => {
  logger.error(`[Server] ${origin}: ${message}`);
  
  return {
    status,
    data,
    message
  };
};

export default {
  returnSuccess,
  returnError,
}
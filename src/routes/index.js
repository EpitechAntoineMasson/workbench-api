import express from 'express';
import routes from 'require-dir';

import { logger } from '../utils';

export default app => {
  Object.keys(routes()).forEach(endpoint => {
    const router = express.Router();
    
    require(`./${endpoint}`).default(router);
    app.use(`/${endpoint}`, router);
  });
  logger.info('[SERVER]: Routes initialized!');
}
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';

import routes from '../routes/index';
import { logger } from '../utils';

global.port = process.env.VIRTUAL_PORT || 8080
global.api_url = process.env.VIRTUAL_HOST
  ? `https://${process.env.VIRTUAL_HOST}`
  : `http://localhost:${global.port}`;
  global.doc_url = process.env.VIRTUAL_HOST
  ? `https://${process.env.VIRTUAL_HOST}/doc`
  : `http://localhost:${global.port}/doc`;

const app = express();

app.use('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

http.createServer(app).listen(global.port);
logger.info(`[Server]: Listening at ${global.api_url}`);
require('./swagger').default(app);
logger.info(`[Server]: Documentation available at ${global.doc_url}`);

routes(app);
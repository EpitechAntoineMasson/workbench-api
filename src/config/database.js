import mongoose from 'mongoose';
import { logger } from '../utils';
import { database_url } from '../../config.json';

mongoose.connect(database_url)
  .catch(error => logger.error(error));
const database = mongoose.connection;

database.once('open', () => {
  logger.info('[Server]: Database successfully connected');
});

export default database;
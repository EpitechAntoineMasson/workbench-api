import { ClientModel } from '../models';
import { logger } from '../utils';

const createClient = async client => {
  try {
    const newClient = new ClientModel(client);

    await newClient.validate();
    const res = await newClient.save();

    return res;
  } catch (err) {
    logger.error(err);
  }
};

const ClientController = {
  createClient,
}

export default ClientController;
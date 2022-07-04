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

const getClientByGuild = async guild => {
  try {
    const client = await ClientModel.findOne({ guild_id: guild.id }).exec();

    if (!client) logger.error(`[GET] client: No client found for guild ${guild.name}`);
    else return client._doc;

    return null;
  } catch(err) {
    logger.error(err);
  }
};

const ClientController = {
  createClient,
  getClientByGuild,
}

export default ClientController;
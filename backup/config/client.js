import moment from 'moment';

import { Client, Intents } from 'Discord.js';
import { logger } from '../utils';
import { ClientModel } from '../models';
import { ClientController } from '../controllers';
import { guild_id } from '../../../config.json';
import Globals from './globals';

const client = new Client({ 
  intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGES
  ]
});

client.once('ready', () => {
  client.user.setActivity(`benching on ${client.guilds.cache.size} servers`);
  if (client.isReady()) logger.info('[Server]: Bot initialized successfully!');
  ClientController.getClientByGuild({ id: guild_id })
    .then(res => Globals.Client.set({ ...res }))
    .catch(err => logger.error(err));
});

client.on('guildCreate', guild => {
  ClientModel.findOne({ guild_id: guild.id })
    .then(res => {
      if (!res) {
        ClientController.createClient({
          guild_id: guild.id,
          guild_name: guild.name,
          prefix: '!',
          listening_channels: [],
          join_date: new Date(guild.joinedTimestamp),
        }).then(res => {
          if (res)
            logger.info(`[Client]: Client joined ${res.guild_name} on ${moment(res.join_date).format('DD MMM YYYY HH:mm')}`);
        }).catch(logger.error);
      } else
      logger.info(`[Client]: Client has already joined ${res.guild_name} on ${moment(res.join_date).format('DD MMM YYYY HH:mm')}`);
    })
    .catch(logger.error);
});

export default client;
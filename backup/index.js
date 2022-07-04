import database from './config/database';
import client from './config/client';
import { bot_token, commands } from '../../config.json';
import exec_commands from './commands';
import { logger, destruct_message } from './utils';
import Globals from './config/globals';

client.on('messageCreate', msg => {
  const { prefix, cmd, params } = destruct_message(msg.content);

  if (msg.author.bot) return;

  if (prefix === Globals.Client.get().prefix) {
    if (!commands.includes(cmd)) {
      logger.error(`[Input]: Invalid command '${cmd}'`);
      return;
    }
    exec_commands(client, msg, cmd, params);
  } else
    logger.error(`[Input]: Bad prefix ${prefix}`);
});

client.login(bot_token)
  .catch(err => logger.error(err));
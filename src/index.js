/* import client from './config/client';
import { bot_token, prefix, commands } from '../config.json';
import { logger } from './utils';
import commands_exec from './commands';

client.on('messageCreate', msg => {
  const sep = msg.content.split(' ');

  const pref = msg.content[0];
  const params = sep.slice(1)
  const cmd = sep[0].slice(1);

  if (pref !== prefix)
    logger.error(`[Input] ${cmd}: Bad prefix ${pref}`);
  else {
    if (!commands.includes(cmd)) logger.error(`[Input] ${cmd}: Invalid command`);
    else commands_exec(cmd, params, msg);
  }
});

client.login(bot_token); */

import database from './config/database';
import client from './config/client';
import { bot_token } from '../config.json';
import { logger } from './utils';

client.login(bot_token)
  .catch(err => logger.error(err));
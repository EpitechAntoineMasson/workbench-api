import { c_add } from './commands/candidate';
import { logger } from './utils';

export default (client, msg, cmd, params) => {
  switch (cmd) {
    case 'add':
      c_add(client, msg, params)
        .then(res => console.log(res))
        .catch(err => logger.error(err));
      break;
    default: break;
  }
};
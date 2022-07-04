import { c_add, c_remove, c_candidate } from './commands/candidate';

export default (client, msg, cmd, params) => {
  switch (cmd) {
    case 'add':
      c_add(client, msg, params);
      break;
    case 'remove':
      c_remove(client, msg, params);
      break;
    case 'candidate':
      c_candidate(client, msg, params);
      break;
    default: break;
  }
};
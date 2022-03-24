import { logger } from "../../utils";

const c_listen = (cmd, params, channel) => {
  if (params.length < 1)
    logger.error(`[Input] ${cmd}: <channel> is required`);
  else {
    const to_listen = params[0] === 'here' ? channel.id : params[0];
    console.log(to_listen);
  }
};

export default c_listen;
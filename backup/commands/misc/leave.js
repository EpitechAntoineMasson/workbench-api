import { logger } from "../../utils";

const m_leave = guild => {
  guild.leave()
  .then(res => logger.info(`[Command] leave: Left the guild ${res}`))
  .catch(console.error);
};

export default m_leave;
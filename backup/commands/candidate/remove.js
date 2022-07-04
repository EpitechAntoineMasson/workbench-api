import { QuestionController } from "../../controllers";
import { logger } from "../../utils";

const c_listen = (client, msg, params) => {
  QuestionController.deleteQuestion(msg.guild, params)
    .then(res => logger.info(`[DELETE] question: question with keyword ${params.toUpperCase()} deleted`))
    .catch(err => logger.error(err));

  return;
};

export default c_listen;
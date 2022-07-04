import { QuestionController } from "../../controllers";
import { logger, response } from "../../utils";

const c_add = (client, msg, params) => {
  if (params.includes(' ')) {
    // response(msg, "❌ Le mot-clé de la question ne peut contenir qu'un seul mot");
    return;
  } else {
    const question = {
      guild_id : msg.guild.id,
      keyword: params.toUpperCase()
    };
    QuestionController.createQuestion(question)
      .then(() => {
        // response(msg, `✅ Question ${params.toUpperCase()} correctement ajoutée`);
      })
      .catch(err => logger.error(err));
  }
};

export default c_add;
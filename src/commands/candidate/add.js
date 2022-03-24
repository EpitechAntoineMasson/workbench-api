import { QuestionController } from "../../controllers";

const c_add = (client, msg, params) => {
  QuestionController.createQuestion({
    client_id: client.id,
  })
};

export default c_add;
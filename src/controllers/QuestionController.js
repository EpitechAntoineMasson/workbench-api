import { QuestionModel } from '../models';
import { logger } from '../utils';
import exec_command from '../commands';

const createQuestion = async question => {
  try {
    const newQuestion = new QuestionModel(question);

    await newQuestion.validate();
    const res = await newQuestion.save();

    return res;
  } catch(err) {
    logger.error(err);
  }
};

const getAllQuestions  = async () => {
  try {
    const res = await QuestionModel.find();

    return res;
  } catch(err) {
    logger.error(err);
  }
};

const getQuestionsByGuild = async guild => {
  try {
    const res = await QuestionModel.find({ guild_id: guild.id });

    return res;
  } catch(err) {
    logger.error(err);
  }
};

const QuestionController = {
  createQuestion,
  getAllQuestions,
  getQuestionsByGuild,
};

export default QuestionController;
import { QuestionModel } from '../models';
import { logger, Res } from '../utils';

const createQuestion = async question => {
  try {
    const newQuestion = new QuestionModel(question);

    const questions = await QuestionModel.find({ guild_id: question.guild_id });
    newQuestion.order = questions.length;

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

const getAllGuildQuestions = async guild => {
  try {
    const res = await QuestionModel.find({ guild_id: guild.id }).sort('order');

    return res;
  } catch(err) {
    logger.error(err);
  }
};

const getQuestionByKeyword = async (guild, key) => {
  try {
    const question = await QuestionModel.findOne({ 
      guild_id: guild.id,
      keyword: key.toUpperCase(),
    });

    if (!question) logger.error(`[GET] question: No question with keyword ${key.toUpperCase()}`);
    else return question;
  } catch(err) {
    logger.error(err);
  }
};

const patchQuestion = async (guild, key, question) => {
  try {
    const question = await QuestionModel.findOneAndUpdate({
      guild_id: guild.id,
      keyword: key,
    }, { ...question });

    return question;
  } catch(err) {
    logger.error(err);
  }
}

const deleteQuestion = async (guild, key) => {
  try { 
    const res = await QuestionModel.findOneAndDelete({
      guild_id: guild.id,
      keyword: key,
    });

    return !!res.deletedCount;
  } catch(err) {
    logger.error(err);
  }
}

const QuestionController = {
  createQuestion,
  getAllQuestions,
  getAllGuildQuestions,
  getQuestionByKeyword,
  deleteQuestion,
};

export default QuestionController;
import mongoose, { Schema } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

const QuestionSchema = new Schema({
  guild_id:{
    type: String,
    required: true,
  },
  keyword:{
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    default: true
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  picture: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number
  },
});

QuestionSchema.plugin(mongooseUniqueValidator);

const QuestionModel = mongoose.model('Questions', QuestionSchema);

export default QuestionModel;
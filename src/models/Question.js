import mongoose, { Schema } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

const QuestionSchema = new Schema({
  client_id: String,
  field: String,
  required: Boolean,
  title: String,
  description: String,
  input_type: {
    type: String,
    enum: ['text', 'image'],
  },
});

QuestionSchema.plugin(mongooseUniqueValidator);

const QuestionModel = mongoose.model('Questions', QuestionSchema);

export default QuestionModel;
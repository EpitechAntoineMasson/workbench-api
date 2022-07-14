import { Schema } from 'mongoose';

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  token: {
    type: String,
  },
  registration_date: {
    type: Date,
    default: new Date,
  },
  last_login_date: {
    type: Date,
  },
});

export default UserSchema;
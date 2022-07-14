import mongoose from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import m2s from 'mongoose-to-swagger'

import { UserSchema } from './schemas';

UserSchema.plugin(mongooseUniqueValidator);

const UserModel = mongoose.model('User', UserSchema);
const User = m2s(UserModel);

export { User };
export default UserModel;
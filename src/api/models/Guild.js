import mongoose from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import m2s from 'mongoose-to-swagger'

import { GuildSchema } from './schemas';

GuildSchema.plugin(mongooseUniqueValidator);

const GuildModel = mongoose.model('Guild', GuildSchema);
const Guild = m2s(GuildModel);

export { Guild };
export default GuildModel;
import mongoose, { Schema } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import m2s from 'mongoose-to-swagger'

const GuildSchema = new Schema({
  guild_id: String,
  guild_name: String,
  prefix: String,
  join_date: Date,
});

GuildSchema.plugin(mongooseUniqueValidator);

const GuildModel = mongoose.model('Guild', GuildSchema);
const Guild = m2s(GuildModel);

export { Guild };
export default GuildModel;
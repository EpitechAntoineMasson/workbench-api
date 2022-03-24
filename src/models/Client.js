import mongoose, { Schema } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

const ClientSchema = new Schema({
  guild_id: String,
  guild_name: String,
  prefix: String,
  listening_channel: [ String ],
  join_date: Date,
});

ClientSchema.plugin(mongooseUniqueValidator);

const ClientModel = mongoose.model('Client', ClientSchema);

export default ClientModel;
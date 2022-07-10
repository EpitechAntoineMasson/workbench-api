import { Schema } from 'mongoose';

const GuildSchema = new Schema({
  guild_id: String,
  guild_name: String,
  prefix: String,
  join_date: Date,
});

export default GuildSchema;
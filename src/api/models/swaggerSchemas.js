import m2s from 'mongoose-to-swagger';

import UserModel from "./User";
import GuildModel from "./Guild";

export default {
  User: m2s(UserModel),
  Guild: m2s(GuildModel),
};
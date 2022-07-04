import { MessageEmbed } from 'discord.js';

import { QuestionController } from "../../controllers";
import { logger } from "../../utils";

const c_candidate = (client, msg, params) => {
  QuestionController.getAllGuildQuestions(msg.guild)
    .then(res => {
      console.log(res);
    })
    .catch(err => logger.error(err));
  /* QuestionController.getQuestionsByGuild(msg.guild)
    .then(res => {
      const embed = new MessageEmbed()
        .setTitle('Formulaire de candidature')
        .setAuthor({ name: msg.author.tag, iconURL: msg.author.displayAvatarURL(true) })
        .setThumbnail(msg.author.displayAvatarURL(true))
        .setColor('#ffd700')
      res.map(q => embed.addField(q.title, q.description || 'No description yet', false));
      msg.channel.send({ embeds: [embed] });
    })
    .catch(err => logger.error(err)); */
  return;
};

export default c_candidate;
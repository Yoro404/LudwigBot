const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const Discord = require('discord.js');
const fs = require('fs');
const Xp = require("../xp_system/XP")

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rank')
    .setDescription('Permet de savoir le rank'),

  async execute(bot, interaction, args) {
    const user = await interaction.options.getUser('username') || interaction.user

    Xp.Rank({bot: bot, msg: interaction, players: user})
  }
};
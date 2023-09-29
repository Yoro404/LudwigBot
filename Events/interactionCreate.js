const Discord = require('discord.js');

module.exports = async (bot, interaction, message, args) => {
    if(interaction.type === Discord.InteractionType.ApplicationCommand) {
        let command = require(`../Commandes/${interaction.commandName}.js`);
         command.execute(bot, interaction, interaction.options);
    }
}
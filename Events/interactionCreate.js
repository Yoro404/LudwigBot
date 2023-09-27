const Discord = require('discord.js');

module.exports = async (bot, interaction, message, args) => {
    if(interaction.type === Discord.InteractionType.ApplicationCommand) {
        let command = require(`../Commandes/${interaction.commandName}.js`);
         command.run(bot, interaction, interaction.options, message, args);
    }
}

/*module.exports = async (bot, interaction) => {
        if (!interaction.isChatInputCommand()) return;

        const command = bot.commands.get(interaction.commandName);
        
        if (!command) {
            interaction.reply({content: "Invalide"});
        }

         command.run(bot, interaction, interaction.options);
        



}*/
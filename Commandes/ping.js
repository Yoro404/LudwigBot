const { Discord,SlashCommandBuilder, PermissionFlagsBits } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("bah le ping gros t'es con ou quoi ?")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    
    async run(bot, message) {
        await message.reply(`Ping : ${(bot.ws.ping)}`)
    }
}
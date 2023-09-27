const { Discord, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Levels = require('discord.js-leveling');
const ms = require('ms');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("rank")
        .setDescription("infos sur votre rank"),

    async run(bot, interaction) {
        const member = interaction.user
        const embed = new EmbedBuilder();
        const levelUser = await Levels.fetch(interaction.user.id, interaction.guild.id)
        if (!levelUser) return interaction.reply({ content: "L'utilisateur n'a pas assez d'xp", ephemeral: true});

        embed.setTitle(`**Rank**`).setDescription(`Client : **${member.username}**\n\nNiveau : **${levelUser.level}**\n\nXp : **${levelUser.xp.toLocaleString()}**`).setTimestamp().setThumbnail(interaction.user.displayAvatarURL({ format: 'png', dynamic: true })).setFooter({text: 'Ludwig Café', iconURL: 'https://cdn.discordapp.com/icons/1126842220205584474/a_87f28156d1a716785ce6b88758030792.gif'}).setColor('Blurple')
        return interaction.reply({ embeds: [embed]});
        
    }
}
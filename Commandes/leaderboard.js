


const { Discord, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Levels = require('discord.js-leveling');
const ms = require('ms');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("leaderboard")
        .setDescription("Classement des membres"),

    async execute(bot, interaction) {
        const { guildId } = interaction
        const rawleaderboard = await Levels.fetchLeaderboard(interaction.guild.id, 10)
        if (rawleaderboard.length < 1) return interaction.reply("Personne dans le leaderboard")

        const computedArray = [];
        for (const key of rawleaderboard) {
            const user = await bot.users.fetch(key.userID) || { username: "Unknown" };
            computedArray.push({
                guildID: key.guildID,
                userID: key.userID,
                xp: key.xp,
                level: key.level,
                position: (rawleaderboard.findIndex(i => i.guildID === key.guildID && i.userID === key.userID) + 1),
                username: user.username,
            });
        }

        const lb = computedArray.map(entry => `**${entry.position}.** ${entry.username}\n**Level :** ${entry.level}\n**XP :** ${entry.xp.toLocaleString()}\n`);

        const embed = new EmbedBuilder()
            .setTitle("**Leaderboard**")
            .setDescription(lb.join("\n"))
            .setTimestamp()
            .setThumbnail('https://cdn.discordapp.com/icons/1126842220205584474/a_87f28156d1a716785ce6b88758030792.gif')
            .setFooter({text: 'Ludwig Café', iconURL: 'https://cdn.discordapp.com/icons/1126842220205584474/a_87f28156d1a716785ce6b88758030792.gif'})
            .setColor('Blurple')


        return interaction.reply({ embeds: [embed] });
    }
}

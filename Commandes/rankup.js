const { Discord, SlashCommandBuilder, EmbedBuilder } = require("discord.js")
const Levels = require("discord.js-leveling")
const ms = require('ms');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("rankup")
    .setDescription("Combien d'xp avant le prochain niveau"),

    async run(bot, interaction) {
        const {options} = interaction

        const levelUser = await Levels.fetch(interaction.user.id, interaction.guild.id)

        const niveau = (levelUser.level + 1);

        const xpAmount = Levels.xpFor(niveau);

        const embed = new EmbedBuilder()
        .setTitle('**Rank Up**')
        .setDescription(`Client : **${interaction.user.username}**\n\nProchain niveau : **${niveau}**\n\nXp requis : **${xpAmount}**`)
        .setThumbnail(interaction.user.displayAvatarURL({ format: 'png', dynamic: true }))
        .setTimestamp()
        .setColor('Blurple')
        .setFooter({text: 'Ludwig Café', iconURL: 'https://cdn.discordapp.com/icons/1126842220205584474/a_87f28156d1a716785ce6b88758030792.gif'})
        //.setAuthor({ name: `${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ format: 'png', dynamic: true })})


        //interaction.reply({content: `Tu as besoins de ${xpAmount} xp pour passé niveau ${niveau}`, ephemeral: true})
        interaction.reply({embeds: [embed]})


    }
}
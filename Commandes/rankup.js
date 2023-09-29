const { Discord, SlashCommandBuilder, EmbedBuilder } = require("discord.js")
const XP = require("../xp_system/XP")
const ms = require('ms');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("rankup")
    .setDescription("Combien d'xp avant le prochain niveau"),

    async execute(bot, interaction) {
        const {options} = interaction

        const levelUser = await XP.InfoUser({bot: bot, msg: interaction, players: interaction.user})

        const niveau = (levelUser.Lvl + 1);

        const xpAmount = levelUser.XpMax - levelUser.Xp 

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
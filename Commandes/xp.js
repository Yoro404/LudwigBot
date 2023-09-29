const { Discord, SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js")
const XP = require("../xp_system/XP")
const ms = require('ms');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("xp")
    .setDescription("Ajuster l'xp de l'utilisateur")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addSubcommand(subcommand =>
        subcommand.setName("add")
            .setDescription("Add xp")
            .addUserOption(option =>
                option.setName("cible")
                .setDescription("Sélectioner l'utilisateur")
                .setRequired(true)
            )
            .addIntegerOption(option =>
                option.setName("nombre")
                .setDescription("Nombre d'xp donné")
                .setRequired(true)
            )

        
    )
    .addSubcommand(subcommand =>
        subcommand.setName("remove")
            .setDescription("remove xp")
            .addUserOption(option =>
                option.setName("cible")
                .setDescription("Sélectioner l'utilisateur")
                .setRequired(true)
            )
            .addIntegerOption(option =>
                option.setName("nombre")
                .setDescription("Nombre d'xp enlever")
                .setRequired(true)
            )

        
    ),

    async execute(bot, interaction) {
        const {options, guilid} = interaction

        const sub = options.getSubcommand();
        const target = options.getUser("cible")
        const amount = options.getInteger("nombre")
        const embed = new EmbedBuilder();

        try {
            switch (sub) {
                case "add":
                    await XP.AddXP({msg: interaction, xp: amount, players: target});
                    embed.setTitle('**Added XP**').setDescription(`✅ **${amount}** xp ont été donné à ${target}`).setTimestamp().setColor("Green").setThumbnail('https://cdn.discordapp.com/icons/1126842220205584474/a_87f28156d1a716785ce6b88758030792.gif');
                    break;
                case "remove":
                    await XP.RemoveXP({msg: interaction, xp: amount, players: target});
                    embed.setTitle('**Removed XP**').setDescription(`✅ **${amount}** xp ont été enlevé à ${target}`).setTimestamp().setColor("Green").setThumbnail('https://cdn.discordapp.com/icons/1126842220205584474/a_87f28156d1a716785ce6b88758030792.gif');
                    break;
            }

        } catch (err) {
            console.log("[Error] -", err);
        }


        interaction.reply({ embeds: [embed]})
        

    }
}
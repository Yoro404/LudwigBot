const { Discord, SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js")
const Levels = require("discord.js-leveling")
const ms = require('ms');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("level")
    .setDescription("Ajuster le niveau de l'utilisateur")
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
                .setDescription("Nombre de niveau donné")
                .setMinValue(0)
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
                .setDescription("Nombre de niveau enlever")
                .setMinValue(0)
                .setRequired(true)
            )

        
    )
    .addSubcommand(subcommand =>
        subcommand.setName("set")
            .setDescription("Set xp")
            .addUserOption(option =>
                option.setName("cible")
                .setDescription("Sélectioner l'utilisateur")
                .setRequired(true)
            )
            .addIntegerOption(option =>
                option.setName("nombre")
                .setDescription("Nombre de niveau donné")
                .setMinValue(0)
                .setRequired(true)
            )

        
    ),

    async run(bot, interaction) {
        const {options, guilid} = interaction

        const sub = options.getSubcommand();
        const target = options.getUser("cible")
        const amount = options.getInteger("nombre")
        const embed = new EmbedBuilder();

        try {
            switch (sub) {
                case "add":
                    await Levels.appendLevel(target.id, interaction.guild.id, amount);
                    embed.setTitle('Added level').setDescription(`${amount} niveaux ont été donné à ${target}`).setTimestamp().setThumbnail('https://cdn.discordapp.com/icons/1126842220205584474/a_87f28156d1a716785ce6b88758030792.gif').setColor('Green');
                    break;
                case "remove":
                    await Levels.subtractLevel(target.id, interaction.guild.id, amount);
                    embed.setTitle('Removed level').setDescription(`${amount} niveaux ont été enlevé à ${target}`).setTimestamp().setThumbnail('https://cdn.discordapp.com/icons/1126842220205584474/a_87f28156d1a716785ce6b88758030792.gif').setColor('Green');
                    break;
                case "set":
                    await Levels.setLevel(target.id, interaction.guild.id, amount);
                    embed.setTitle('Set level').setDescription(`${target} niveaux est maintenant à ${amount} xp`).setTimestamp().setThumbnail('https://cdn.discordapp.com/icons/1126842220205584474/a_87f28156d1a716785ce6b88758030792.gif').setColor('Green');
                    break;
            }

        } catch (err) {
            console.log(err);
        }


        interaction.reply({ embeds: [embed]})
        

    }
}
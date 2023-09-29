const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info_server')
        .setDescription('Affiche les informations du serveur'),

    async execute(bot, interaction, args) {
        try {
            const guild = interaction.guild;
            const members = await guild.members.fetch();
            const channels = await guild.channels.fetch();
            const owner = await guild.members.fetch(guild.ownerId);
            const Roles = guild.roles.cache;
            const discreate = guild.createdAt.toLocaleDateString();

            let Emojis = guild.emojis.cache;
            let EmojisList = [];

            Emojis.forEach((emoji) => {
                EmojisList.push(`<:${emoji.name}:${emoji.id}>`);
            });

            const exampleEmbed = {
                color: 0x0099FF,
                title: `Nom : ${guild.name}`,
                description: `Description: ${guild.description || "Aucun"}`,
                fields: [
                    { name: 'Membres en ligne', value: `${guild.memberCount}`, inline: false },
                    { name: 'État des boosts de serveur', value: `${guild.premiumSubscriptionCount} Boosts ( Niv: ${guild.premiumTier} )`, inline: false },
                    { name: 'Rôles', value: `${Roles.size}`, inline: true },
                    { name: 'Salons', value: `${channels.size}`, inline: true },
                    { name: 'Création du serveur', value: `${discreate}`, inline: false },
                    { name: `Liste des émojis [${EmojisList.length}]`, value: /*`${EmojisList.join(',')}`*/"eeeeeeeee", inline: false },
                ],
            };

            await interaction.reply({ embeds: [exampleEmbed] });
        } catch (error) {
            console.error(error);
            await interaction.reply('Une erreur est survenue lors de la récupération des informations du serveur.');
        }
    }
};
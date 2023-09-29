const { SlashCommandBuilder, EmbedBuilder} = require('discord.js')
const axios = require('axios')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('citation')
    .setDescription('Citation aléatoire'),
    async execute(bot, interaction) {
        const embed1 = new EmbedBuilder()
            .setColor('Aqua')
            .setDescription(`Recherche en cours`)
        await interaction.reply({embeds: [embed1]})

        const input = {
            method: 'GET',
            url: 'https://quotes15.p.rapidapi.com/quotes/random/',
            params: {
                language_code: 'fr'
            },
            headers: {
                'X-RapidAPI-Key': '5c8414135bmshefca76db409fb4ep1fbb92jsn1bc1b404beb7',
                'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
             }
             
        };
        try {
            const output = await axios.request(input);
            const embed2 = new EmbedBuilder()
            .setColor('Aqua')
            .setDescription(`${output.data.content} - ${output.data.originator.name}`)
            .setFooter({text: 'Ludwig Café', iconURL: 'https://cdn.discordapp.com/icons/1126842220205584474/a_87f28156d1a716785ce6b88758030792.gif'})
            .setTimestamp()
            await interaction.editReply({embeds: [embed2]})
        } catch (error) {
            console.error(error);
        }
    }
}

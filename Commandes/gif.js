const { SlashCommandBuilder} = require('discord.js')
const superagent = require('superagent')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('gif')
    .setDescription('Rechercher un gif')
    .addStringOption(option => option.setName('mot-clé').setDescription('Que veux tu chercher').setRequired(true)),
    async run (bot, interaction) {
        await interaction.reply({ content: '.'})
        const { options } = interaction;
        const query = options.getString('mot-clé');
        const key = 'AIzaSyCpNOBvCZIHHxHMENgQ17XMuVByGZKOJag';
        const clientkey = 'DiscordBot';
        const lmt = 8;

        let choice = Math.floor(Math.random() * lmt);
        const link = "https://tenor.googleapis.com/v2/search?q=" + query +"&key=" + key + "&client_key=" + clientkey + "&limit=" + lmt;
        const output = await superagent.get(link).catch(err => {console.log(err)});

        try {
            await interaction.editReply({content: output.body.results[choice].itemurl})
        } catch (e) {
            return await interaction.editReply({content: `Aucun gif trouvé` })

        }

    }
}
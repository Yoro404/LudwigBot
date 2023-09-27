const Discord = require('discord.js');
const {EmbedBuilder} = require("discord.js");
const Levels = require('discord.js-leveling');

module.exports = async (bot, message, interaction) => {
        if (!message.guild || message.author.bot) return;

        if (message.content.length < 3) return;
        
        var randomAmountOfXp = Math.floor(Math.random() * 26) + 1;
        if (message.content.length > 15) {randomAmountOfXp + 5}
        if (message.attachments.size > 0) {randomAmountOfXp + 10}


        const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);

        if (hasLeveledUp) {
            const user = await Levels.fetch(message.author.id, message.guild.id)

            const levelEmbed = new EmbedBuilder()
                .setTitle(`Notre très chère client(e)`)
                .setDescription(`${message.author}\nAugmente notre chiffre d'affaire de **${user.level} 000€**! `)
                .setColor('Blurple')
                .setTimestamp()
                .setThumbnail(message.author.displayAvatarURL({ format: 'png', dynamic: true }))
                .setFooter({text: 'Ludwig Café', iconURL: 'https://cdn.discordapp.com/icons/1126842220205584474/a_87f28156d1a716785ce6b88758030792.gif'})

            const channelle = '1126844297191370764'
            const channellles = bot.channels.cache.get(channelle);
            const sendEmbed = await channellles.send({embeds: [levelEmbed]});
            sendEmbed.react('☕');


        }
}

/*module.exports = {
    name: "messageCreate",

    async run(message) {
        if (!message.guild || message.author.bot) return;

        if (message.content.lenght < 3) return;

        const randomAmountOfXp = Math.floor(Math.random() * 29) + 1;
        const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);

        if (hasLeveledUp) {
            const user = await Levels.fetch(message.author.id, message.guild.id)

            const levelEmbed = new EmbedBuilder()
                .setTitle("Nouveau niveau")
                .setDescription(`**GG** ${message.author}, tu viens de passé niveau **${user.level + 1}**! `)
                .setColor("Random")
                .setTimestamp();

            const sendEmbed = await message.channel.send({embeds: [embed]});
            sendEmbed.react('☕');


        }
        
    }
}*/
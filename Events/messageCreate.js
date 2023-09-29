const Discord = require('discord.js');
const {EmbedBuilder} = require("discord.js");
const XP = require('../xp_system/XP');

module.exports = async (bot, message, interaction) => {
        if (!message.guild || message.author.bot) return;

        if (message.content.length < 3) return;
        console.log(message.content)
        var randomAmountOfXp = Math.floor(Math.random() * 26) + 2;


        const addxp = await XP.AddXP({msg: message, xp: randomAmountOfXp});
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
/*const { Discord, SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const ms = require('ms');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("clear")
        .setDescription('bah clear les messages gros con')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addStringOption(option =>
            option.setName("nombre")
                .setDescription("Quantité de messages à supprimer")
                .setRequired(true))
        .addChannelOption(option =>
            option.setName("salon")
                .setDescription("Salon visé")
                .setRequired(false)),

    async run(bot, message, args) {
        let channel = args.getChannel("salon");
        if(!channel) channel = message.channel;
        if(channel.id !== message.channel.id && message.guild.channels.cache.get(channel.id)) return message.channel.send("Aucun salon trouvé");

        let number = args.getString("nombre");
        if(parseInt(number) <= 0 || parseInt(number) > 100) return message.channel.reply("Il faut un nombre entre 1 et 100");

        try {
            let messages = await channel.bulkDelete(parseInt(number))

            await message.reply({content: `Les ${messages.size} messages on étais supprimé`, ephemeral: true})

        } catch (err) {
            let messages = [...(await channel.messages.fetch()).values().filter(async m => (Date.now() - m.createdAt) <= 1209600000)]
            if(messages.length === 0) return message.channel.reply("Aucun message à supprimé")
            await channel.bulkDelete(messages)

            await message.reply({content: `bhibhibvu \${message.lenght}\` on étais supprimé`, ephemeral: true}) 
        }
    }}*/

    const { Discord, SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
    const ms = require('ms');
    
    module.exports = {
        data: new SlashCommandBuilder()
            .setName("clear")
            .setDescription('bah clear les messages gros con')
            .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
            .addStringOption(option =>
                option.setName("nombre")
                    .setDescription("Quantité de messages à supprimer")
                    .setRequired(true))
            .addChannelOption(option =>
                option.setName("salon")
                    .setDescription("Salon visé")
                    .setRequired(false)),
    
        async run(bot, message, args) {
            let channel = args.getChannel("salon");


            if (!channel) channel = message.channel;
            if (channel.id !== message.channel.id && message.guild.channels.cache.get(channel.id)) return message.channel.send("Aucun salon trouvé");
    
            let number = args.getString("nombre");
            if (parseInt(number) <= 0 || parseInt(number) > 100) return message.channel.reply("Il faut un nombre entre 1 et 100");
    
            try {
                let messages = await channel.messages.fetch({ limit: parseInt(number) });
                await channel.bulkDelete(messages);
    
                await message.reply({ content: `Les ${messages.size} messages ont été supprimés`, ephemeral: true });
            } catch (err) {
                //let oldmessages = [...(await channel.messages.fetch()).filter(m => (Date.now() - m.createdAt) <= 1209600000)];
                //let messages = [...(await channel.messages.fetch()).values()].filter(m => (Date.now() - m.createdAt) <= 1209600000);
                //if (messages.length === 0) return message.reply("Aucun message à supprimer");
                let oldmessages = [...(await channel.messages.fetch()).filter(m => (Date.now() - m.createdAt) <= 1209600000)];
                //let messagesString = JSON.stringify(oldmessages);

                //await channel.bulkDelete(oldmessages);
    
                await message.reply({ content: `${oldmessages.length} messages peuvent étre supprimé`, ephemeral: true });
            }
        }
    }
    
    
     
 

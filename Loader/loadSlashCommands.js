const Discord = require('discord.js');
const { REST, Routes } = require(`discord.js`);
const config = require('../config.js');
const ascii = require('ascii-table');
const table = new ascii().setHeading("SlashCommands", "Status");
const configgg = require('../config.js');
  

module.exports = async bot => {
    let commands = [];
    let list = [];
    bot.commands.forEach(async command => {
    try {
        await commands.push(command.data)
        await list.push(command.data.name)
        table.addRow(`${command.data.name}`, "Loaded");
    } catch (error) {
        console.log(command, error)
    }
    });
            const rest = new REST({ version: '10' }).setToken(config.token);


        try {
            await rest.put(Routes.applicationCommands(config.botid), { body: commands });
        } catch (error) {
            console.log(error)

        }
        return console.log(table.toString());

}

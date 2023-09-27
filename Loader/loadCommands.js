const fs = require('fs');
const discord = require("discord.js");
const ascii = require('ascii-table');
const sta = ("Status")
const com = ("Commands")
const table = new ascii().setHeading(com,sta);

module.exports = async bot => {
const L = ("Loaded")
    fs.readdirSync("./Commandes").filter(f => f.endsWith(".js")).forEach(async file => {
    
    
        let command = require(`../Commandes/${file}`)
        let commandname = file.slice(0, file.length - 3)
        const comm = (commandname)
        table.addRow(comm, L);


        if (!commandname || typeof commandname !== "string") {
            table.addRow(commandname, `Error`);
        }
        
        bot.commands.set(commandname, command)

    })
    return console.log(table.toString());
 
}
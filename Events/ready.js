const Discord = require('discord.js');
const mongoose = require('mongoose');
const config = require("../config.js");
const Levels = require("discord.js-leveling");
const ascii = require('ascii-table');
const XP = require('../xp_system/XP.js')

module.exports = async bot => {
    const table = new ascii().setHeading("MongoDB", `${bot.user.tag}`);
    await mongoose.connect(config.mongodb || '', {
        keepAlive: true,
    });
    if (mongoose.connect) {
        table.addRow("Connected", "");
        Levels.setURL(config.mongodb);
    }

    if (bot.on) {
        table.addRow("", "Connected");

    }

    bot.guilds.cache.forEach(async (guild) => {
        console.log(`Le bot est présent sur le serveur "${guild.name}" (ID: ${guild.id})`);
  
        XP.init({guild: guild})
  
  });
    await console.log(table.toString());
    

}

//${bot.user.tag}
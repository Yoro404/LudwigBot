const Discord = require('discord.js');
const mongoose = require('mongoose');
const config = require("../config.js");
const Levels = require("discord.js-leveling");
const ascii = require('ascii-table');

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
    await console.log(table.toString());
    

}

//${bot.user.tag}
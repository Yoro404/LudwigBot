const {IntentsBitField, Client, Partials, Collection} = require("discord.js")
const bot = new Client({intents: 3276799});
const config = require("./config.js")
var colors = require('colors');



bot.commands = new Collection()
let loadCommands = require("./Loader/loadCommands")
let loadEvents = require("./Loader/loadEvents")
let loadSlashCommands = require("./Loader/loadSlashCommands")
let ready = require("./Events/ready")


bot.login(config.token)

   
setTimeout(() => {
        loadEvents(bot)
}, 1000);
setTimeout(() => {
        loadCommands(bot) 
}, 1500);
setTimeout(() => {
        loadSlashCommands(bot) 
}, 2000);
setTimeout(() => {
        ready(bot) 
}, 2500);
setTimeout(() => {
        console.log(".-----------.")
        console.log("|",colors.green("Completed"),"|")
        console.log("'-----------'")
}, 3500);
        





/*const fs = require('fs');
const discord = require("discord.js");

module.exports = async bot => {
    const eventFiles = fs.readdirSync("./Events").filter(file => file.endsWith(".js"));

    for (const file of eventFiles) {
        console.log('-------------------------------------');

        const event = (await import(`../Events/${file}`)).default;
        const eventName = file.split(".js")[0]; // Extract event name without the ".js" extension
        bot.on(eventName, (...args) => event(bot, ...args));
        console.log(`Event: ${eventName} loaded`);
    }
};*/

/*const fs = require('fs');
const discord = require("discord.js");

module.exports = async bot => {
    const eventFiles = fs.readdirSync("./Events").filter(file => file.endsWith(".js"));

    for (const file of eventFiles) {
        console.log('-------------------------------------');

        try {
            const event = (await import(`../Events/${file}`)).default;

            const eventName = file.split(".js")[0]; // Extract event name without the ".js" extension
            bot.on(eventName, (...args) => event(bot, ...args));
            console.log(`Event: ${eventName} loaded`);
        } catch (error) {
            console.error(`Error loading event in file ${file}: ${error}`);
        }
    }
};*/

/*const fs = require('fs');
const discord = require("discord.js");

module.exports = async bot => {
    fs.readdirSync("./Events").filter(f => f.endsWith(".js")).forEach(async file => {

        try {

            let event = require(`../Events/${file}`)

            bot.on(file.split(".js").join(""), event.bind(null, bot))

            console.log(`Event: ${file} Loaded`)
        
        } catch (error) {
            console.log(`Event: error `)
            console.log(error)
        }

    })
};*/

module.exports = async bot => {
    const ascii = require('ascii-table');
    const fs = require('fs');
    const table = new ascii().setHeading("Events", "Status");

    fs.readdirSync("./Events").filter(f => f.endsWith(".js")).forEach(async file => {
        try {

            let event = require(`../Events/${file}`)

            bot.on(file.split(".js").join(""), event.bind(null, bot))
            table.addRow(file, "Loaded");
        
        } catch (error) {
            console.log(file, error)
        }

    })
        return console.log(table.toString());


}

//table.addRow(file, "Loaded");

/*module.exports = async bot => {
function loadEvents(bot) {
    const ascii = require('ascii-table');
    const { AsciiTable } = require('ascii-table');
    const fs = require('fs');
    const table = new AsciiTable("Events Loader").setHeading('Events, Status');

    const folders = fs.readdirSync("./Events");
    for (const folder of folders) {
        const files = fs.readdirSync(`./Events/`).filter((file)=> file.endsWith("js"));

        for (const file of files) {
            const event = require(`../Events/${file}`);

            if (event.rest) {
                if(event.once)
                bot.rest.once(event.name, (...args) =>
                event.run(...args, bot)
                )
                else
                bot.rest.on(event.name, (...args) => 
                    event.run(...args, bot)
                );
            } else {
                if (event.once)
                    bot.once(event.name, (...args) => event.run(...args, bot));
                else bot.once(event.name, (...args) => event.run(...args, bot));
            }
            table.addRow(file, "Loaded");
            continue;

        }
    }
    return console.log(table.toString(), "\nEvents loaded");

}
module.exports = async bot => {loadEvents}
}
module.exports = {loadEvents};*/



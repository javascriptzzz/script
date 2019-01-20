const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix;

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
  
    if(!command.startsWith(prefix)) return;

    if(command === `${prefix}userinfo`) {
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("This is the user's info")
            .setColor("#FFFF")
            .addField("Full Username:", `${message.author.username}#${message.author.discriminator}`)
            .addField("ID:", message.author.id)
            .addField("Created At:", message.author.createdAt)
    
        message.channel.sendEmbed(embed);
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
  
    if(!command.startsWith(prefix)) return;

    if(command === `${prefix}serverinfo`) {
        let embed = new Discord.RichEmbed()
            .setAuthor(`${message.guild.name} - Information`, message.guild.iconURL)
            .setColor("#f4df42")
            .addField("Server Owner", message.guild.owner, true)
            .addField("Server Region", message.guild.region, true)
            .addField("Channel Count", message.guild.channels.size, true)
            .addField("Total Member Count", message.guild.memberCount)
        
            .addField("Humans", checkMembers(message.guild), true)
            .addField("Bots", checkBots(message.guild), true)
            .addField("Verification Level", message.guild.verificationLevel, true)
            .setFooter("Guild Created At:")
            .setTimestamp(message.guild.createdAt);
    
        message.channel.sendEmbed(embed);
    }
});

bot.login(process.env.BOT_TOKEN);

const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix;

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  bot.user.setGame("testing the bot | by noobperson")
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
      
      return;
    }

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
  
    if(!command.startsWith(prefix)) return;

    if(command === `${prefix}help`) {
        let embed = new Discord.RichEmbed()
            .setColor("#A500F7")
            .addField("Help - shows this message")
    
        message.channel.sendEmbed(embed);
      
        return;
    }

    if(command === `${prefix}mute`) {
        let toMute = message.mentions.users.first() || message.guild.member.get(args[0]);
        if(!toMute) return message.channel.sendMessage("You did not specify a user to mute");
        return message.reply(toMute.username || toMute.user.username);

bot.login(process.env.BOT_TOKEN);

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
     Let embed = new Discord.RichEmbed()
         .setAuthor(message.author.username)
         .setDescription("This is an description");
    
     message.channel.sendEmbed(embed);
  }
});

bot.login(process.env.BOT_TOKEN);

const botsettings = require("./package.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix;

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log("Bot is ready! ${bot.user.username}");
  
  try {
      Let link = await bot.generateInvite(["ADMINISTRATOR"]);
      console.log(link);
  } catch(e) {
      console.log(e.stack);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return
  
  Let messageArray = message.content.split(" ");
  Let command = messageArray[0];
  Let args = messageArray.slice(1);
  
  if(!command.startswith(prefix)) return;
  
  if(command === `${prefix}userinfo`) {
    Let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username);
      .setDescription("This is the user's info");
    message.channel.sendEmbed(embed);
  }
});

bot.login(process.env.BOT_TOKEN);

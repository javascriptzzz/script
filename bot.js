const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix;

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  bot.user.setPresence(`testing the bot | by noobperson`, { url: 'https://www.twitch.tv/noobperson2'});
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
            .addField("User ID:", message.author.id)
            .addField("Created At:", message.author.createdAt)
    
        message.channel.sendEmbed(embed);
      
      return;
    }

    if(command === `${prefix}serverinfo`) {
        let embed = new Discord.RichEmbed()
            .setColor("#A500F7")
            .addField("Server Name:", message.guild.name)
            .addField("ID:", message.guild.id)
            .addField("Created At:", message.guild.createdAt)
    
        message.channel.sendEmbed(embed);
      
      return;
    }
  
    if(command === `${prefix}avatar`) {
        let embed = new Discord.RichEmbed()
            .addField("Username:", `${message.author.username}`)
            .addField("User ID:", `${message.author.id}`)
            .setColor("#A500F7")
            .setThumbnail(message.author.displayAvatarURL)
    
        message.channel.sendEmbed(embed);
      
      return;
    }
      
    if(command === `${prefix}test`) {
      let embed = new Discord.RichEmbed()
          .addField("test:", `${message.author.username}`)
          .addField("you pinged me haha", `${message.author.id}`)
          .setColor("#A500F7")
      
      message.channel.sendEmbed(embed);
    }
    
    if(command === `${prefix}hello`) {
      let embed = new Discord.RichEmbed()
          .addField("hello", `$(message.author.username}`)
          .setColor("#A500F7")
      
      message.channel.sendEmbed(embed);
    }
});

bot.login(process.env.BOT_TOKEN);

const Discord = require("discord.js");
const prefix = "-";

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
        .addField("User ID:", message.author.id)
        .addField("Created at", message.author.createdAt)
    
    message.channel.sendEmbed(embed);
  
  }
  
  if(command === `${prefix}say`) {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }
});

bot.login(process.env.BOT_TOKEN);

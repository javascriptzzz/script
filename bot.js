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
  
  if(command === `${prefix}ping`) {
    message.channel.send("Pong!");
  
  }
  
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
  
  if(command === `${prefix}kick`) {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry, you don't have permissions to use this!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.channel.send(`${member.user.username} has been kicked reason: ${reason}`);

  }
  
  if(command === `${prefix}ban`) {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.channel.send(`${member.user.username} has been banned reason: ${reason}`);
  
  }
  
  if(command === `${prefix}purge`) {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  
  }
  
  if(command === `${prefix}mute`) {
    if(!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("You dont have manage message")
    
    let toMute = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!toMute)
      return message.channel.send("You did not specify a user mention or ID");
    let role = message.guild.roles.find(r => r.name === "Muted");
    if(toMute.roles.has(role.id))
      return message.channel.send("This user is already muted!");
    await toMute.addRole(role);
    message.channel.send("I have muted them");
  
  }
  
  if(command === `${prefix}unmute`) {
    if(!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("You dont have manage message")
    
    let toMute = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!toMute)
      return message.channel.send("You did not specify a user mention or ID");
    let role = message.guild.roles.find(r => r.name === "Muted");
    if(!role || !toMute.roles.has(role.id))
      return message.channel.send("This user is not muted!");
    await toMute.removeRole(role);
    message.channel.send("I have unmuted them");
  
  }
  
  if(command === `${prefix}avatar`) {
    message.reply(message.author.avatarURL);
  
  }
  
  if(command === `${prefix}servers`) {
    message.channel.send(`Serving ${bot.guilds.size} servers`)
    message.channel.send(bot.guilds.map(g=>g.name).join('\n'))
  
  }
  
  if(command === `${prefix}eval`) {
    if(message.author.id == 277983178914922497) {
      try {
        const code = args.join(" ");
        let evaled = eval(code);
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
        console.log();((evaled), {code:"xl"});
      }catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${(err)}\n\`\`\``);
      }}}
});

bot.login(process.env.BOT_TOKEN);

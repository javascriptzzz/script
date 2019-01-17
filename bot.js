// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const prefix = "-";

//Checks if it starts with (/profile) 
if(message.content.startsWith(`/profile`)){
    //Defines the user that needs to be searched to be either the user pinged OR the user that called the command
    let user = message.mentions.users.first(); || message.author;
    let embed = new Discord.RichEmbed()
    .setTitle(`Profile`);
    .setDescription(`Profile of ${user.username}`);
    //Note: .send(embed) is allowed but not recommended and it's easier and safer todo .send({embed}) or in your case .send({embed:botembed})
    message.channel.send({embed});    
}

client.login(process.env.BOT_TOKEN);

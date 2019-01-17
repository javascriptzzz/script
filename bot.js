const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "d";

client.on("ready", () => {
    console.log('Bot has started');
});

client.on("guildMemberAdd", (member) => { // Check out previous chapter for information about this event
let guild = member.guild; 
let memberTag = member.user.tag; 
if(guild.systemChannel){
	guild.systemChannel.send(new Discord.RichEmbed() // Creating instance of Discord.RichEmbed
	.setTitle("A new user joined") // Calling method setTitle on constructor. 
	.setDescription(memberTag + " has joined the guild") // Setting embed description
	.setThumbnail(member.user.displayAvatarURL) // The image on the top right; method requires an url, not a path to file!
	.addField("Members now", member.guild.memberCount) // Adds a field; First parameter is the title and the second is the value.
	.setTimestamp() // Sets a timestamp at the end of the embed
	);
}
});

client.on('message', message => {
    if (message.content === '-ping') {
    	message.reply('Pong!');
  	}
});

client.on('message', message => {
    if (message.content === 'hmm') {
        message.react("🤔");
  	}
});

client.on('message', message => {
  if (message.content === '-avatar') {
    message.channel.send(message.author.displayAvatarURL);
  }
});

client.on('message', message => {
  if (message.content === 'lol') {
    message.react("😂");
  }
});

client.login(process.env.BOT_TOKEN);

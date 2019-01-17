const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "d";

client.on("ready", () => {
    console.log('Bot has started');
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

var help = {
  name: 'help',
  description: 'Shows all the commands in the bot',
  usage: 'rhelp',
  inHelp: 'yes'
};

function turnToEmbed(object) {
  return new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Some handy dandy info on: "+object.title)
    .addField("Description:",object.description,true)
    .addField("Usage:",object.usage,true)
    .setFooter("And voila :P");
}

message.channel.send({ embed: turnToEmbed(help) });

client.login(process.env.BOT_TOKEN);

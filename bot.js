const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    console.log('${client.user.name}');
});

client.on('message', message => {
    if (message.content === '-ping') {
    	message.reply('Pong!');
  	}
});

client.on('message', message => {
    if (message.content === '-bing') {
    	message.reply('Bong!');
  	}
});

client.on('message', message => {
    if (message.content === '-test') {
    	message.reply('test!');
  	}
});

client.on('message', message => {
  if (message.content === '!avatar') {
    var member = message.mentions.members.first();
    let embed = new Discord.RichEmbed()
  .setImage(message.member.avatarURL)
  .setColor('#275BF0')
    message.channel.send(embed)
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

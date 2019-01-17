const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "d";

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('Pong!');
  	}
});

client.on('message', message => {
    if (message.content === '-ping') {
    	message.reply('Pong!');
      message.react("🤔");
  	}
});

client.on('message', message => {
  if (message.content === '-avatar') {
    message.channel.send(message.author.displayAvatarURL);
  }
});


client.login(process.env.BOT_TOKEN);

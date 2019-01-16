const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('Pong!');
  	}
});

client.on('message', message => {
    if (message.content === '-noob') {
    	message.reply('noob!');
  	}
});

client.on('message', message => {
    if (message.content === 'test') {
        message.reply('test!');
    }
});

client.on('message', message => {
    if (message.content === 'noobperson') {
    	message.reply('_ _');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

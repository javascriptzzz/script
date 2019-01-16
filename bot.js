const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Logged in as');
    console.log('Test bot');
    console.log('530689434346061824');
});

client.on('message', message => {
    if (message.content === '-hello') {
    	message.reply('Hello how are you!');
  	}
});

client.on('message', message => {
    if (message.content === "I'm good and you") {
    	message.reply("I'm good too");
  	}
});

client.on('message', message => {
    if (message.content === '-test') {
    	message.reply('test!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

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

client.login(process.env.BOT_TOKEN);

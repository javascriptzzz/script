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
  	}
});

client.on('message', message => {
  if (message.content === '-avatar') {
    message.channel.send(message.author.displayAvatarURL);
  }
});

if (`${prefix}help` === 'command') {
    let embed = new Discord.RichEmbed()
      .addField('!help', 'gives you this current information')
      .setTitle('Help')
      .setColor('#3498db')
      .addField(
        '!userinfo',
        'gives you info about a user(currently being worked on)'
      )
      .addField(
        '!serverinfo',
        'gives you info about a server(currently working on it)'
      )
      .addField('link to support server', 'https://discord.gg/NZ2Zvjm')
      .addField(
        'invite link for bot',
        'https://discordapp.com/api/oauth2/authorize?client_id=449983742224760853&permissions=84993&scope=bot'
      )

    message.reply("here's a list of commands that i'm able to do")
    message.channel.send({ embed })

client.login(process.env.BOT_TOKEN);

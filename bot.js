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

client.on('message', message => {
  if (message.author.bot) return
  if (message.channel.type === 'dm') return

  let messageArray = message.content.split(' ')
  let command = messageArray[0]
  let args = messageArray.slice(1)

  if (!command.startsWith(prefix)) return

  if (command === `${prefix}userinfo`) {
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setColor('#3498db')
      .setThumbnail(`${message.author.avatarURL}`)
      .addField(
        'Name',
        `${message.author.username}#${message.author.discriminator}`
      )
      .addField('ID', message.author.id)

    message.reply("I've Sent Your User Info Through DM!")
    message.channel.send({ embed })
  }

client.login(process.env.BOT_TOKEN);

const { Discord, Client, RichEmbed } = require('discord.js');
const client = new Discord.Client();
const prefix = "d";

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.channel.send('PONG!');
      }
});

client.on('message', message => {
    if (message.content === 'bing') {
        message.reply('BONG!');
      }
});

client.on('message', message => {
    if (message.content === 'hmm') {
        message.react('🤔');
    }
});

client.on('message', message => {
    if (message.content === '-avatar') {
        message.reply(message.author.displayAvatarURL);
    }
});

client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === 'how to embed') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('A slick little embed')
      // Set the color of the embed
      .setColor(0xFF0000)
      // Set the main content of the embed
      .setDescription('Hello, this is a slick embed!');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});
 
client.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "d";

client.on("ready", () => {
    console.log('Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.');
 
    client.user.setActivity('F.D.O.J.R.P in ${client.guilds.size} servers');
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

client.on("message"), async message => {
 
    if (message.author.bot) return;
 
    if (message.content.indexOf(config.prefix) !== 0) return;
 
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
 
    if (command === "ping") {
 
        const m = await message.channel.send("Ping?");
        m.edit('Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms');
    }

client.login(process.env.BOT_TOKEN);

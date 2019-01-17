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

if (command === "help") {
 
 
        message.delete().catch(O_o => {});
 
 
        let HelpEmbed = new Discord.RichEmbed()
            .setThumbnail('http://worldartsme.com/images/help-free-clipart-1.jpg')
            .setTitle("Help")
            .setColor("GREEN")
            .addField("Prefix :", "0")
            .addField("Commands :", `
 **0purge** \n ***GETS RID OF UP TWO 50 MESSAGES (NEEDS FIXING)***
 
 **0kick** \n ***KICKS USER YOU WANT***
 
 **0ban** \n ***BANS USER YOU WANT***
 
 **0say** \n ***SAYS WHAT YOU WANT TO SAY***
 
 **want the bot?** \n ***visit http://maybotx.ga to get your own***
 
 **bot made by BLACKKNIFE** \n ***ASK HIM FOR HELP WITH THE BOT!***
 
 **Want to roleplay on Xbox one?** \n ***Come down to FDOJ(Federal Department Of Justice RolePlay for XboxOne! We have a cad/mdt, if your going to be dispatch, be advised, use a computer not a phone or tablet https://discord.gg/63CxwZg***)
    `)
 
        return message.channel.send(HelpEmbed);
    }

client.login(process.env.BOT_TOKEN);

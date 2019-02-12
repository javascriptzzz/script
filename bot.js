const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const request = require('request');
const prefix = botSettings.prefix;

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  bot.user.setPresence(`testing the bot | by noobperson`, { url: 'https://www.twitch.tv/noobperson2'});
  console.log(`${bot.user.username} is online!`);
});

bot.on("message", async (msg) => {
  if (msg.content.startsWith({prefix} + `-ratings `) {
        var content = msg.content
        var parts = content.split(" ");
        var username = parts[1];

        request('http://ratings.tankionline.com/get_stat/profile/?user=' + (username) + '&lang=en', {
            json: true
        }, (err, res, body) => {
            if (err) {
                return console.log(err);
            }
            //error catching
            try {
                //if premium = false then it displays no
                if ((body.response.hasPremium) == false) {
                    var premium = 'No'
                    //if premium = true then it displays Yes
                } else if ((body.response.hasPremium) == true) {
                    var premium = 'Yes'
                }
                //shows the image and the name that matches each rank
                if ((body.response.rank) == 1) {
                    var rank = "Recruit"
                    var rimg = "https://i.imgur.com/ZcBNexc.png"
                } else if ((body.response.rank) == 2) {
                    var rank = "Private"
                    var rimg = "https://i.imgur.com/Jaar0MF.png"
                } else if ((body.response.rank) == 3) {
                    var rank = "Gefreiter"
                    var rimg = "https://i.imgur.com/j2DfBdW.png"
                } else if ((body.response.rank) == 4) {
                    var rank = "Corporal"
                    var rimg = "https://i.imgur.com/7Pn4X88.png"
                } else if ((body.response.rank) == 5) {
                    var rank = "Master Corporal"
                    var rimg = "https://i.imgur.com/WKZ0sVp.png"
                } else if ((body.response.rank) == 6) {
                    var rank = "Sergeant"
                    var rimg = "https://i.imgur.com/O2WuJAJ.png"
                } else if ((body.response.rank) == 7) {
                    var rank = "Staff Sergeant"
                    var rimg = "https://i.imgur.com/bTQLm9h.png"
                } else if ((body.response.rank) == 8) {
                    var rank = "Master Sergeant"
                    var rimg = "https://i.imgur.com/VvivZg0.png"
                } else if ((body.response.rank) == 9) {
                    var rank = "First Sergeant"
                    var rimg = "https://i.imgur.com/rCkln3K.png"
                } else if ((body.response.rank) == 10) {
                    var rank = "Sergeant-Major"
                    var rimg = "https://i.imgur.com/xCKvB2G.png"
                } else if ((body.response.rank) == 11) {
                    var rank = "Warrant Officer 1"
                    var rimg = "https://i.imgur.com/TJKJ4eB.png"
                } else if ((body.response.rank) == 12) {
                    var rank = "Warrant Officer 2"
                    var rimg = "https://i.imgur.com/Q8U5QIz.png"
                } else if ((body.response.rank) == 13) {
                    var rank = "Warrant Officer 3"
                    var rimg = "https://i.imgur.com/Ygi65T7.png"
                } else if ((body.response.rank) == 14) {
                    var rank = "Warrant Officer 4"
                    var rimg = "https://i.imgur.com/rx0zDOR.png"
                } else if ((body.response.rank) == 15) {
                    var rank = "Warrant Officer 5"
                    var rimg = "https://i.imgur.com/jDmMo5j.png"
                } else if ((body.response.rank) == 16) {
                    var rank = "Third Lieutenant"
                    var rimg = "https://i.imgur.com/LLvlTZY.png"
                } else if ((body.response.rank) == 17) {
                    var rank = "Second Lieutenant"
                    var rimg = "https://i.imgur.com/1Oor2V6.png"
                } else if ((body.response.rank) == 18) {
                    var rank = "First Lieutenant"
                    var rimg = "https://i.imgur.com/03s6YiZ.png"
                } else if ((body.response.rank) == 19) {
                    var rank = "Captain"
                    var rimg = "https://i.imgur.com/kf8Uo7U.png"
                } else if ((body.response.rank) == 20) {
                    var rank = "Major"
                    var rimg = "https://i.imgur.com/Zl9q3rP.png"
                } else if ((body.response.rank) == 21) {
                    var rank = "Lieutenant Colonel"
                    var rimg = "https://i.imgur.com/bmTEps1.png"
                } else if ((body.response.rank) == 22) {
                    var rank = "Colonel"
                    var rimg = "https://i.imgur.com/Ac9S6w7.png"
                } else if ((body.response.rank) == 23) {
                    var rank = "Brigadier"
                    var rimg = "https://i.imgur.com/vBo95NA.png"
                } else if ((body.response.rank) == 24) {
                    var rank = "Major General"
                    var rimg = "https://i.imgur.com/YOuPegl.png"
                } else if ((body.response.rank) == 25) {
                    var rank = "Lieutenant General"
                    var rimg = "https://i.imgur.com/dYh43EF.png"
                } else if ((body.response.rank) == 26) {
                    var rank = "General"
                    var rimg = "https://i.imgur.com/59NrDOX.png"
                } else if ((body.response.rank) == 27) {
                    var rank = "Marshal"
                    var rimg = "https://i.imgur.com/S4smUqx.png"
                } else if ((body.response.rank) == 28) {
                    var rank = "Field Marshal"
                    var rimg = "https://i.imgur.com/DRmWUfj.png"
                } else if ((body.response.rank) == 29) {
                    var rank = "Commander"
                    var rimg = "https://i.imgur.com/lZu9Rqt.png"
                } else if ((body.response.rank) == 30) {
                    var rank = "Generalissimo"
                    var rimg = "https://i.imgur.com/Fggz9xh.png"
                    //protects from errors and shows legend number
                } else if ((body.response.rank) > 31) {
                    var numrank = (body.response.rank) - 30
                    var rank = "Legend " + (numrank)
                    var rimg = "https://i.imgur.com/NahcZQ9.png"
                } else if ((body.response.rank) == 31) {
                    var rank = "Legend"
                    var rimg = "https://i.imgur.com/NahcZQ9.png"
                }

                //exp
                var expleft = (body.response.scoreNext) - (body.response.score)
                //kd ratio
                var kdratio = (body.response.kills) / (body.response.deaths)
                //kd ratio rounded
                var kdratioround = kdratio.toFixed(2)
                //efficiency position that displays - if equals to -1
                if ((body.response.rating.efficiency.position) == -1) {
                    var efpos = "-"
                    // efficiency position that matches the one at the ratings website
                } else {
                    var efpos = (body.response.rating.efficiency.position).toLocaleString('en')
                }
                //efficiency value that displays - if equals to -1
                if ((body.response.rating.efficiency.value) == -1) {
                    var efval = "-"
                    //efficiency value that matches the one in the ratings website, which is rounded 
                } else {
                    var num = (body.response.rating.efficiency.value)
                    var numrd = Math.round((num) / 100) * 100
                    var numm = Number((numrd))
                    var numstr = numm.toString().replace(/^0+|0+$/g, "")
                    var efval = Number((numstr))
                }
                //experience position that displays - if equals to -1
                if ((body.response.rating.score.position) == -1) {
                    var expos = "-"
                    //efficiency position that matches the one at the ratings website
                } else {
                    var expos = (body.response.rating.score.position).toLocaleString('en')
                }
                //efficiency value that displays - if equals to -1
                if ((body.response.rating.score.value) == -1) {
                    var exval = "-"
                    //efficiency value that matches the one at the ratings website
                } else {
                    var exval = (body.response.rating.score.value).toLocaleString('en')
                }
                
                //crystals position that displays - if equals to -1
                if ((body.response.rating.crystals.position) == -1) {
                    var crypos = "-"
                    //crystals position that matches the one at the ratings website
                } else {
                    var crypos = (body.response.rating.crystals.position).toLocaleString('en')
                }
                //crystals value that displays - if equals to -1
                if ((body.response.rating.crystals.value) == -1) {
                    var cryval = "-"
                    //crystals value that matches the one at the ratings website
                } else {
                    var cryval = (body.response.rating.crystals.value).toLocaleString('en')
                }
				//golds position that displays - if equals to -1
                if ((body.response.rating.golds.position) == -1) {
                    var gpos = "-"
                    //golds position that matches the one at the ratings website
                } else {
                    var gpos = (body.response.rating.golds.position).toLocaleString('en')
                }
                //golds value that displays - if equals to -1
                if ((body.response.rating.golds.value) == -1) {
                    var gval = "-"
                    //golds value that matches the one at the ratings website
                } else {
                    var gval = (body.response.rating.golds.value).toLocaleString('en')
                }
                //embed
                let sEmbed = new Discord.RichEmbed()
                    .setTitle("Stats for " + (body.response.name))
                    .setColor(16776960)
                    .setThumbnail(rimg)
                    .setURL("http://ratings.tankionline.com/en/user/" + (body.response.name) + "/")
                    .setFooter("『Geop』#4066", "https://cdn.discordapp.com/avatars/216156825978929152/4726ea8789285323ca03e995b9a059bf.png")
                    .addField("__Name__", (body.response.name))
                    .addField("__Rank__", (rank))
                    .addField("__Premium__", (premium))
                    .addField("__EXP__", (body.response.score).toLocaleString('en') + "/" + (body.response.scoreNext).toLocaleString('en'))
                    .addField("__EXP left__", (expleft).toLocaleString('en'))
                    .addField("__Caught Golden Boxes__", (body.response.caughtGolds).toLocaleString('en'))
                    .addField("__Obtained Crystals__", (body.response.earnedCrystals).toLocaleString('en'))
                    .addField("__Kills__", (body.response.kills).toLocaleString('en'))
                    .addField("__Deaths__", (body.response.deaths).toLocaleString('en'))
                    .addField("__K/D Ratio__", (kdratioround))
                    .addField("__Efficiency Rating Place | Value__", (efpos).toString() + " | " + (efval).toLocaleString('en'))
                    .addField("__Experience Rating Place | Value__", (expos).toString() + " | " + (exval).toString())
                    .addField("__Gold Box Rating Place | Value__", (gpos) + " | " + (gval))
                    .addField("__Crystal Rating Place | Value__", (crypos) + " | " + (cryval))
                msg.channel.send(sEmbed);
                //if an error happened
            } catch (err) {
                if (err) {
                    let sEmbed = new Discord.RichEmbed()
                        .setTitle("Player Not Found")
                        .setColor(16776960)
                        .setFooter("『Geop』#4066", "https://cdn.discordapp.com/avatars/216156825978929152/4726ea8789285323ca03e995b9a059bf.png")
                    msg.channel.send(sEmbed);
                }
            }
        });
        //if the user doesn't include a username
    } else if (msg.content === (prefix) + 'tanki') {
        let sEmbed = new Discord.RichEmbed()
            .setTitle("-tanki <username>")
            .setColor(16776960)
            .setFooter("『Geop』#4066", "https://cdn.discordapp.com/avatars/216156825978929152/4726ea8789285323ca03e995b9a059bf.png")
        msg.channel.send(sEmbed);
    }
});

bot.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    var sans = ["http://www.imgim.com/turk-bayragi-yirtik-olamaz.jpg","http://www.imgim.com/3476incib6006359.jpg","http://www.imgim.com/7915incin2510990.png","http://www.imgim.com/80ed8666962096310250abe7d407774d.jpg","http://www.imgim.com/333385_0.jpg","http://www.imgim.com/4955incid2651206.jpg","http://www.imgim.com/9675incit9986795.jpg","http://www.imgim.com/6434incim256103.jpg"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .setImage(`${sonuc}`)
    .setColor("RANDOM")
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tr'],
  permLevel: 0
};

exports.help = {
  name: 'türk',
  description: '',
  usage: 'hd!türk'
};
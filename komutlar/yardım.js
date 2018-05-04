const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor("RANDOM")
  .addField("**KOMUTLARIM:**", `\nhd!sor = Sorunuza EVET HAYIR BELKİ cevaplarını verir. \nhd!herkesebendençay = Herkese Çay Alırsınız. \nhd!koş = Koşarsınız.\nhd!çayiç = Çay İçersiniz. \nhd!çekiç = İstediğiniz Kişiye Çekiç Atarsınız.\nhd!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nhd!sunucuresmi = BOT Sunucunun Resmini Atar. \nhd!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nhd!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \nhd!yazıtura = Yazı Tura Oynarsınız. \nhd!taskağıtmakas = Taş Kağıt Makas Oynarsınız. \nhd!zekayaşım = zekayaşınızı gösterir. \nhd!türk = Rastgele TÜRK Fotoğrafı Atar.`)
  .addField("**LİNKLER**", "\n[DESTEK SUNUCUM](https://discord.gg/henbxsD) \n[DAVET LİNKİM](https://discordapp.com/oauth2/authorize?client_id=441832917447081984&scope=bot&permissions=8)")
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'hd!yardım [komut]'
};

const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {

  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Kob's Bot`)
.setDescription(`


:white_small_square: **=**  \`m!kanal-koruma\` : **Kanal Koruma Aç/Kapat**
:white_small_square: **=**  \`m!küfür-engel\`:  **Küfür Engel Aç/Kapat**
:white_small_square: **=**  \`m!reklam-engel\` :  **Reklam Engel Aç/Kapat**
:white_small_square: **=**  \`m!sohbet aç-kapat\` :  **Sohbeti Açıp Kapatırsınız**
:white_small_square: **=**  \`m!ban\`: **Belirttiğiniz Kişiyi Sunucudan Banlarsınız**
:white_small_square: **=**  \`m!unban\`:  **Belirttiğiniz Kişinin Banını Kaldırırsınız**
:white_small_square: **=**  \`m!istatistik\`:  **Botun İstatistiklerini Atar**
:white_small_square: **=**  \`m!temizle\`:  **Belirttiğiniz Sayıda Mesajı Siler**
:white_small_square: **=**  \`m!ping\`:  **Pinginizi Ölçüp Atar**
:white_small_square: **=**  \`m!avatar\`:  **Avatarınızı Atar**
:white_small_square: **=**  \`m!uyar\`:  **Etiketlediğiniz Kişiyi Etiketlediğiniz Sebepden Dolayı Uyarır**
:white_small_square: **=**  \`m!uyarı-sil\`:  **Etiketlediğiniz Kişinin Uyarılarını Siler**
:white_small_square: **=**  \`m!uyarı-ölç\`:  **Etiketlediğiniz Kişinin Uyarısını Gösterir**

`)
.setImage("https://cdn.discordapp.com/attachments/751436097099137177/784202186618830858/unknown.png")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)




};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};

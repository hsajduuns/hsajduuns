const Discord = require("discord.js");
module.exports = {
    description: '\`\`\`Crie uma enquete para seus amigos no servidor\`\`\`',
    categoria: 'Social',
    task(client, message, suffix) {

if(!suffix) return message.channel.send('Defina uma questão para criar uma enquete.');
let user = message.author;
const embed = new Discord.RichEmbed()
      .setAuthor(user.tag, user.avatarURL).setAuthor(user.tag, user.avatarURL)
      .setAuthor('📍 `Nova Enquete` ')
      .setDescription(`\`\`\`${suffix}\`\`\``)
      .addField('`Voto 1`', `1\u20e3 Sim`, true)
      .addField('`Voto 2`', `2\u20e3 Não`, true)
      .setColor(0xeab600)
      .setTimestamp()

message.channel.send({embed})
.then(m => {
        m.react("1\u20e3");
        m.react("2\u20e3");
})}};
const Discord = require("discord.js");
module.exports = {
    description: '\`\`\`Verifique o Status de Presença de um usuário.\`\`\`',
    categoria: 'Social',
     cooldown: 10,
    task(client, message,suffix) {


let color = {
      "online": "#00c903",
      "idle": "#ff9a00",
      "dnd": "#ff0000",
      "offline": "#d8d8d8"
};
let estados = {
      "online": "Online",
      "idle": "Ausente",
      "dnd": "Não incomodar",
      "offline": "Desconectado/invisivel"
};

let user = message.mentions.users.first();
if(!user) return message.reply(`Mencione a usuário.`);

const embed = new Discord.RichEmbed()
    .setColor(color[user.presence.status])
    .addField(`Status de ${user.username}`, `${estados[user.presence.status]}`)
    .addField('Jogando:',user.presence.game != null ? user.presence.game.name : "Nada");
  
message.channel.send({embed});
}};
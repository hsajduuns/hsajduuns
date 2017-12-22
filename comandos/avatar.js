const Discord = require("discord.js");
module.exports = {
    description: `\`\`\`Mostro avatar de usários usando menção ou ID.\`\`\``,
    categoria: 'Social',
    task(client, message, suffix) {

let id = message.mentions.users.first() 
    ? message.mentions.users.first().id 
    : suffix.match(/\d{16,18}/)
    ? suffix.match(/\d{16,18}/)[0]
    : null;
if (!id) return message.reply('Marque alguém ou especifique um ID');
let user = client.users.has(id) ? client.users.get(id) : null;
if (user) {
   const embed = new Discord.RichEmbed()
    .setDescription(' **:camera_with_flash:  Avatar de ' + user + `** \n **[Fazer Download!](${user.displayAvatarURL})**`)
    .setImage(user.displayAvatarURL)
    .setColor(0x763ebb)
message.channel.send({embed});

} else {
    message.reply('Não encontrei nenhum usuário');
}}
};
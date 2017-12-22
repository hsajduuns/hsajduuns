const Discord = require('discord.js');

module.exports = {
    description: '\`\`\`Verifico os cargos atual do servidor.\`\`\`',
    categoria: 'Social',
    task(client, message, suffix) {
    var server = message.guild;
    let id = message.guild.id;
  const embed = new Discord.RichEmbed()
    .setColor(0xeab600)
    .setDescription(`${client.guilds.get(id).roles.map(r => r).join("\n ")}`)
    .setFooter('Lista de cargos') 
    .setAuthor(server.name, server.iconURL);
    
message.channel.send({embed});
}};
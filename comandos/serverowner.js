const Discord = require("discord.js");
module.exports = {
    description: '\`\`\`Veja o proprietário do servidor.\`\`\`',
    categoria: 'Social',
    cooldown: 5,
    task(client, message, suffix) {
if (message.channel.type === "dm") return;
    var server = message.guild;
  
    const embed = new Discord.RichEmbed()
    .addField('• Propietário deste servidor:', server.owner.user+'#'+server.owner.user.discriminator+'', true)
    .setAuthor(server.name, server.iconURL)
    .setColor(0xeab600)
    
   message.channel.send({ embed });
}}
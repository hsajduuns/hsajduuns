
const Discord = require("discord.js");
module.exports = {
    description: '\`\`\`Avisar a algum usuário.\`\`\`',
    categoria: 'Moderação',
    task(client, message, suffix) {


     var user = message.mentions.users.first();
     var member = message.guild.member(user)
     var reason = message.content.split(' ').slice(2).join(' ');
     let role = message.member.hasPermission('KICK_MEMBERS');
     if (!message.member.hasPermission('KICK_MEMBERS'))
     return message.channel.send(`**Você não é um Moderador. :/**`);
     if (!user)
     return message.channel.send('**Mencione alguém para avisar!**');
     if (!reason)
     return message.channel.send(`**Porque quer avisar** ${user.tag}**?** (Use -warn [member] [motivo])`)
     user.send(`*Você foi avisado por ${message.author.tag} Motivo* **${reason}**.`)
     message.channel.send(`${message.guild.member(user)} **foi avisado. Motivo: ${reason}**`);
     
    }}
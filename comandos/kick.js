
module.exports = {
    description: '\`\`\`Expulse usuário do servidor.\`\`\`',
    categoria: 'Moderação',
    task(client, message, suffix) {
   const config  = require("../config.json");
   let user = message.mentions.users.first();
   let razon = suffix.split(' ').slice(1).join(' ');

var perms = message.member.hasPermission("KICK_MEMBERS");

if(!perms) return message.channel.send("`Error` `|` Você não tem permissão para utilizar este comando.");
if (message.mentions.users.size < 1) return message.reply('Você deve mencionar alguém.').catch(console.error);

if (!razon) return message.channel.send('Escreva um Motivo,'+config.prefix+'`kick @username [motivo]`');
if (!message.guild.member(user).kickable) return message.reply('Falha no comando.');
     
message.guild.member(user).kick(razon);
message.channel.send(`**${user}**, foi expulso do servidor. Motivo: ${razon}.`);
}};
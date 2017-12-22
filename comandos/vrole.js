const Discord = require("discord.js");
module.exports = {
    description: '\`\`\`Verifique se você tem um cargo do servidor\`\`\`',
    categoria: 'Social',
    task(client, message, suffix) {

if(!suffix) return message.channel.send('Especifique o nome de um cargo')
let role = message.guild.roles.find("name", suffix);
if(!role) return message.channel.send('**Use** -vrole [nome do cargo(não mencione)].');


if(message.member.roles.has(role.id)) {
    message.channel.send(`Sim. você possui o cargo de: ${role} `);

} else {
    message.channel.send(`Não. Você não tenha o cargo de: ${role} `);

}}}
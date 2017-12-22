const Discord = require("discord.js");

module.exports = {
    description: '\`\`\`Crie um cargo.\`\`\`',
    categoria: 'Moderação',
    task(client, message, suffix) {
   let miembro = message.mentions.members.first();
 
 let nombrerol = suffix.split(' ').slice(1).join(' ');

if (!message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send(":x: Você não tem permissão para utilizar este comando!");

  var rpts = ['https://cdn.dribbble.com/users/473527/screenshots/3443226/success.gif'];
  var link = rpts[Math.floor(Math.random() * rpts.length)]

  var color = ["0xeab600", "0xdd9220", "0x18e437","0x0b62f2", "0xfd0006","0xfb02cf","0xf06d0d"];
  var dime = color[Math.floor(Math.random() * color.length)]

var guild = message.guild;
if(!suffix) return message.channel.send('Nomeie o cargo a ser criado.');

message.guild.createRole({
      name: suffix,
      color: dime
}).then(role=>{

  const embed = new Discord.RichEmbed() 

          .setTitle(":gear: Novo Cargo criado!")
          .setThumbnail(link)
          .setDescription(`:pencil: Cargo ${role} criado com sucesso!`)
          .setColor(0xeab600)

          message.channel.send({embed})
  
}); 

}}
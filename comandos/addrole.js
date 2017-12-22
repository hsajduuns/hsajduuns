    module.exports = {
    description: '\`\`\`Adicione um cargo a um usuário\`\`\`',
    categoria: 'Moderação',
    task(client, message, suffix) {
   
    let membro = message.mentions.members.first();
    let nomerole = suffix.split(' ').slice(1).join(' ');
    const config  = require("../config.json");
    
    if (!message.member.hasPermission('ADMINISTRATOR'))
    return message.channel.send(":x: Você não tem permissão para utilizar este comando!");
    let role = message.guild.roles.find("name", nomerole);
     
    if(message.mentions.users.size < 1) return message.reply('Você deve mencionar a um usuário.').catch(console.error);
    if (!nomerole) return message.channel.send("Escreva desta forma, `"+config.prefix+"addrole` `@username` `@role`");
    if(!role) return message.channel.send('Cargo não encontrado neste servidor.');
    
    membro.addRole(role).catch(console.error);
    message.channel.send(`O cargo **${role}** foi adicionado ao **${membro.user}**.`);
 
  }};
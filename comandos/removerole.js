  module.exports = {
    description: '\`\`\`Remove um cargo de usuário\`\`\`',
    categoria: 'Moderação',
    task(client, message, suffix) {
 let miembro = message.mentions.members.first();
    let nombrerol = suffix.split(' ').slice(1).join(' ');
    
    if (!message.member.hasPermission('ADMNISTRATOR'))
  return message.chanel.send(":x: Você não tem permissão para utilizar este comando!");

    let role = message.guild.roles.find("name", nombrerol)
     
    if(message.mentions.users.size < 1) return message.reply('Debe mencionar a un miembro.').catch(console.error);
    if(!nombrerol) return message.channel.send('Escreva da forma certa, `-removerole @miembro [nome role]`');
    if(!role) return message.channel.send('Cargo não encontrado neste servidor.');
    
    miembro.removeRole(role).catch(console.error);
    message.channel.send(`O cargo **${role}** foi removido de **${miembro.user}** neste servidor.`);

  }}
module.exports = {
    description: '\`\`\`Alterar apelido de usuários\`\`\`',
    categoria: 'Moderação',
    cooldown: 5,
    task(client, message, suffix) {
        
        if (!message.member.hasPermission('MANAGE_NICKNAMES'))
        return message.reply(':no_entry_sign: Este comando está disponível apenas para cargos de Gerenciamento de apelidos.');
        
              
      const content = message.content.split(' ').slice(2);
      const args = content.join(' ');
      let miembro = message.mentions.members.first();
      if(message.mentions.users.size < 1) return message.reply('Você deve mencionar alguém!').catch(console.error);
      if(!args) return message.channel.send("Você deve por um nvo nome");

      miembro.setNickname(`${args}`)
      message.channel.send(`${miembro.user} foi nomeado como: **${args}**`)
  }}
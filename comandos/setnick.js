module.exports = {
    description: '\`\`\`Alterar apelido do Bot\`\`\`',
    categoria: 'Moderação',
    cooldown: 5,
    task(client, message, suffix) {
        
        if (!message.member.hasPermission('MANAGE_NICKNAMES'))
        return message.reply(':no_entry_sign: Este comando está disponível apenas para cargos de Gerenciamento de apelidos.');
        
        message.guild.me.edit({nick:suffix}).then(member =>
        message.reply(`Meu novo apelido é ** ${member.nickname}**`)).catch(console.error);
        }
    }

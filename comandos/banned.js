module.exports = {
    description: '\`\`\`Bano usuários do servidor com motivo.\`\`\`',
    categoria: 'Moderação',
    task(client, message, suffix) {
        let args   = suffix.split(' '),
            member = message.mentions.members.first();
        
        
        if (!member)
            return message.reply('Por favor, para usar esse comando mencione alguém!');
        
        if (!message.member.hasPermission('BAN_MEMBERS'))
        return message.reply(':no_entry_sign: Desculpe, você não tem permissão de banir usuário neste servidor!');
        
        member.ban({
            days: 1, 
            reason: args.slice(1).join(' ')
        }).then(member => {
            message.channel.send(({embed: {description: `  :rotating_light:  **Usuário banido**  \n **Membro banido:** ${member.user}  \n **Motivo:**  \`\`\`${args.slice(1).join(' ')} \`\`\` `,color: 0x763ebb}}));
                
                        }).catch(() => {
            message.channel.send(" :x: Falha no comando.");
        });
    }
};
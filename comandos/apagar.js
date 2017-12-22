
module.exports = {
    description: '\`\`\`Apago mensagens do chat ou um usuário especifico.\`\`\`',
    categoria: 'Moderação',
    task(client, message, suffix) {
        
    
        let args   = message.content.split(' '),
            user   = message.mentions.users.size > 0 ? message.mentions.users.first() : null,
            amount = isNaN(Number(args[1])) ? Number(args[2]) : Number(args[1]);
        
        if (!amount) 
            return message.reply('Especifique um número de mensagens a serem apagadas!');
        if (!amount && !user) 
            return message.reply('Você deve espeficificar um usuário mais a quantidade de mensagens a serem apagadas ou utilizar o comando apagar mais a quantidade de mensagens.');
        if (amount < 2 || amount > 100) 
            return message.reply(':x: Limite incorreto ');
        
        if (!message.member.hasPermission('MANAGE_MESSAGES'))
        return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos de Gerenciamento de mensagens do servidor.');

        message.channel.fetchMessages({
            limit: amount,
        }).then(messages => {
            let deleted = messages.filter(m => user ? m.author.id === user.id : m).array().slice(0, amount);
            if (deleted.length < 2)
                return message.reply(`Não encontrei nenhuma mensagem num limite de ${amount}`);
            
            message.channel.bulkDelete(deleted).catch(error => console.log(error.stack));

message.reply(` deletou ${amount} mensagens deste canal. | :wastebasket: `);

        });
    }
};


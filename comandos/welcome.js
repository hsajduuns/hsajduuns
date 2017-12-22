let reload = require('require-reload')(require),
    utils  = reload('../utils/utils.js');
module.exports = {
    description: '\`\`\`Define ou mostra a mensagem de boas vindas do servidor\`\`\`',
    categoria: 'Social',
    task(client, message, suffix) {
         message.delete(1000); 
        let settings = reload('../settings.json'),
            mensagem = suffix;
            if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');
        if (!mensagem) {
            if (!settings[message.guild.id] || !settings[message.guild.id].welcome)
                return message.channel.send(':warning: Mensagens de boas vindas desabilitada neste servidor. Use -welcome e defina. ');
            else
                return message.channel.send('A mensagem de boas vindas atual desse servidor é:\n' + settings[message.guild.id].welcome);
        } else {
            if (!settings[message.guild.id]) 
                settings[message.guild.id] = {};
                 
            if (mensagem !== 'disable') {
                settings[message.guild.id].welcome = mensagem;
                settings[message.guild.id].welcomeChannel = message.channel.id;
                utils.save('settings', 'json', JSON.stringify(settings));
                return message.channel.send('Mensagem de boas vindas definida! Ela será postada nesse canal :eyes:');
            } else {
                delete settings[message.guild.id].welcome;
                delete settings[message.guild.id].welcomeChannel;
                utils.save('settings', 'json', JSON.stringify(settings));
                return message.channel.send('Mensagem de boas vindas desabilitada');
            }
        }
    }
};
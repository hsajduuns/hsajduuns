let reload = require('require-reload')(require),
    utils  = reload('../utils/utils.js');
module.exports = {
    description: '\`\`\`Define ou mostra a mensagem de saída do servidor\`\`\`',
    categoria: 'Social',
task(client, message, suffix) {
         message.delete(1000); 
        let settings = reload('../settings.json'),
            mensagem = suffix;
        if (!mensagem) {
            if (!settings[message.guild.id] || !settings[message.guild.id].remove)
                return message.channel.send(':warning: Mensagem de saída desabilitada neste servidor. Use -leave e defina.');
            else
                return message.channel.send('A mensagem de saída atual desse servidor é:\n' + settings[message.guild.id].remove);
        } else {
            if (!settings[message.guild.id]) 
                settings[message.guild.id] = {};
            if (mensagem !== 'disable') {
                settings[message.guild.id].remove = mensagem;
                settings[message.guild.id].removeChannel = message.channel.id;
                utils.save('settings', 'json', JSON.stringify(settings));
                return message.channel.send('A mensagem de saída atual desse servidor é:\n' + settings[message.guild.id].removeChannel);
            } else {
                delete settings[message.guild.id].remove;
                delete settings[message.guild.id].removeChannel;
                utils.save('settings', 'json', JSON.stringify(settings));
                return message.channel.send('Mensagem de saída desabilitada');
            }
        }
    }
};
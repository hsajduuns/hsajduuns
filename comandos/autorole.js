let    reload = require('require-reload')(require),
    utils  = reload('../utils/utils.js');

module.exports = {
    description: '\`\`\`Define a role quando um usuário entrar no servidor\`\`\`',
    categoria: 'Moderação',
    task(client, message, suffix) {
         message.delete(1000); 
        let settings = reload('../settings.json');
        if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');
 if (!message.mentions.roles.first()) {
if (settings[message.guild.id] && settings[message.guild.id].autorole)                 
                return message.channel.send(' Cargo definido para:  <@&' + settings[message.guild.id].autorole + '>');
            else
            return message.channel.send('Defina um cargo para a autorole!');
        } else { 
            if (!settings[message.guild.id]) 
                settings[message.guild.id] = {};
settings[message.guild.id].autorole = message.mentions.roles.first().id;
            utils.save('settings', 'json', JSON.stringify(settings));
            return message.channel.send('Cargo definido. ');
           
        }
    }
};
let    reload = require('require-reload')(require),
    utils  = reload('../utils/utils.js');

module.exports = {
    description: '\`\`\`Defina um canal de loggs do servidor.\`\`\`',
    categoria: 'Moderação',
    task(client, message, suffix) {
         message.delete(1000); 
        let settings = reload('../settings.json');
        
        if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');
   if (!message.mentions.channels.first()) {
   if (settings[message.guild.id] && settings[message.guild.id].logging)                 
                return message.channel.send(' Canal mod-logs  definido em:  <#' + settings[message.guild.id].logging + '>')
            else
            return message.channel.send('Defina um canal para mod-logs do servidor!');
        } else { 
            if (!settings[message.guild.id]) 
                settings[message.guild.id] = {};
settings[message.guild.id].logging = message.mentions.channels.first().id;
            utils.save('settings', 'json', JSON.stringify(settings));
            return message.channel.send('Canal mod-logs definido. ');
             
        }
 if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');
    settings[message.guild.id].logging = "";
    utils.save('settings', 'json', JSON.stringify(settings));
    message.channel.send('Logs do servidor desativado.');
       
        
    }
};
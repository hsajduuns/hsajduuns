let  reload = require('require-reload')(require),
       utils  = reload('../utils/utils.js');

module.exports = {
    description: '\`\`\`Defina um canal de sugestão com reações do próprio Bot.\`\`\`',
    categoria: 'Moderação',
    task(client, message, suffix) {
         message.delete(1000); 
        let settings = reload('../settings.json');
        const config  = require("../config.json");
if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');

  if (!message.mentions.channels.first()) {
   if (settings[message.guild.id] && settings[message.guild.id].sugestao)                 
                return message.channel.send(' Canal de Sugestões definido para:  <#' + settings[message.guild.id].sugestao + '>')
            else
            return message.channel.send('Defina um canal para sugestão!');
        } else { 
            if (!settings[message.guild.id]) 
                settings[message.guild.id] = {};
                
        
            settings[message.guild.id].sugestao = message.mentions.channels.first().id;
            utils.save('settings', 'json', JSON.stringify(settings));
            return message.channel.send('Canal de sugestões definido. ');
        } 
    if (message.content === config.prefix+'disable-sugerir') {
	 if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');
    settings[message.guild.id].sugestao = "";
    utils.save('settings', 'json', JSON.stringify(settings));
    message.channel.send('Canal de sugestões desativado');
	 }  
        
}};
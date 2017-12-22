let reload  = require('require-reload')(require),
    settings = require('../settings.json'),
    utils   = reload('../utils/utils.js');


module.exports = {
task(client, message, suffix, guild) {
 
 
if (!message.member.hasPermission('ADMINISTRATOR')) 
return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');
    
settings[message.guild.id].sugestao = "";
utils.save('settings', 'json', JSON.stringify(settings));
message.channel.send('Canal de sugestões desativado.');
       
}};
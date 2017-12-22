const Discord = require("discord.js");

let    reload = require('require-reload')(require),
    utils  = reload('../utils/utils.js');

module.exports = {
    description: '\`\`\`Faça perguntas ao bot\`\`\`',
    categoria: 'Entretenimento',
    task(client, message, suffix) {
         
        let settings = reload('../settings.json');
        
        var rpts = ["Quem sabe...","Fala direito comigo :rage:", "Sim", "Não", "Talvez.", "Você pode parar de me perguntar essas coisas?", "Mano, que pergunta mais escrota.", "ah sei la", "Não sei e não me importo"];
    if (!suffix) return message.reply(`Escreva uma pergunta!`);
   const embed = new Discord.RichEmbed()
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle("Sua Pergunta: \n"+suffix)
.addField("**Minha resposta:**", rpts[Math.floor(Math.random() * rpts.length)])
.setDescription("▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔")
.setColor(0xeab600)
message.channel.send({embed})
}}

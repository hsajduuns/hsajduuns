const Discord = require("discord.js");
module.exports = {
    description: '\`\`\`Obtenha imagens de cachorrinhos super fofos.\`\`\`',
    categoria: 'Entretenimento',
    task(client, message, suffix) {
 
 const randomPuppy = require('random-puppy');

randomPuppy().then(url =>{

      message.channel.send(url);
      

}).catch(err => message.channel.send(":warning: Ocorreu um erro, tente novamente!"));
}}
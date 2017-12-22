 let    reload = require('require-reload')(require),
    utils  = reload('../utils/utils.js');

module.exports = {
    description: '\`\`\`Gere um número aleatório\`\`\`',
    categoria: 'Entretenimento',
    task(client, message, suffix) {
         message.delete(1000); 
  		var result = Math.floor((Math.random() * 100) + 1);
  		message.reply(` Seu número aleatório é  ${result} `);
    }
}
module.exports = {
    description: '\`\`\`Repete qualquer palavra ou frase dentro de uma embed.\`\`\`',
    categoria: 'Entretenimento',
     cooldown: 15,
    task(client, message, suffix) {
        message.channel.send({embed: {description: suffix,color: 0xeab600}});
         message.delete(); 
    }
};
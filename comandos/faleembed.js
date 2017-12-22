module.exports = {
    description: '\`\`\`Repete qualquer palavra ou frase dentro de uma embed.\`\`\`',
    categoria: 'Entretenimento',
     cooldown: 15,
    task(client, message, suffix) {
        message.channel.send({embed: {description: suffix,color: 0x763ebb}});
         message.delete(); 
    }
};
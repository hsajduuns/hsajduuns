module.exports = {
    description: '\`\`\`Repete qualquer palavra ou frase.\`\`\`',
    categoria: 'Entretenimento',
     cooldown: 5,
    task(client, message, suffix) {
        message.channel.send(suffix);
         message.delete(); 
    }
};
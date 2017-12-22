module.exports = {
    description: '\`\`\`Ulitize esse comando para eu modificar suas palavras e frases ao contrário.\`\`\`',
    categoria: 'Entretenimento',
    task(client, message) {
        let reversed = message.content.split(' ').slice(1).join(' ').split('').reverse().join('');
        message.reply(reversed);
    }
};
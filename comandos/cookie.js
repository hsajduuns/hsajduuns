module.exports = {
    description: '\`\`\`Envie um cookie para um amigo!\`\`\`',
    categoria: 'Entretenimento',
     cooldown: 10,
    task(client, message, suffix) {

let user = message.mentions.users.first();
let razon = suffix.split(' ').slice(1).join(' ');

if(!user) return message.channel.send('Mencione a um usuário.');
    
message.channel.send(`${message.author} **enviou um :cookie: para:** ${user}`); 
}}
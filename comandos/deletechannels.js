module.exports = {
     description: '\`\`\`Delete canais de texto ou voz via comando\`\`\`',
    categoria: 'Moderação',
    task(client, message, suffix) {
        
        if (!message.member.hasPermission('MANAGE_CHANNELS'))
    return message.channel.send(":x: Você não tem permissão para utilizar este comando!");
    
    }};
module.exports = {
    description: '\`\`\`Mostro o convite para o meu servidor\`\`\`',
    categoria: 'Social',
     cooldown: 30,
    task(client, message, suffix) {
        message.channel.send('**Venha fazer parte de meu servidor:**  https://discord.gg/Daer3pa');
        
         message.delete(1000); 
    }
};
module.exports = {
    description: '\`\`\`Mostro a thumbnail do servidor.\`\`\`',
    categoria: 'Social',
     cooldown: 15,
    task(client, message, suffix) {
      message.channel.send({embed: {description: suffix, thumbnail: {url: message.guild.iconURL}, color: 0x763ebb}});

         message.delete(); 
    }
};
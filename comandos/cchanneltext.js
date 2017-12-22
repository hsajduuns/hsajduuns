module.exports = {
    description: `\`\`\`Crie um canal de texto via comando, comando funciona apenas para membros que tenham função **MANAGE_CHANNELS**\`\`\``,
    categoria: 'Moderação',
    task(client, message, suffix) {
        
         if (!message.member.hasPermission('MANAGE_CHANNELS'))
    return message.channel.send(":x: Você não tem permissão para utilizar este comando!");
    
 	message.channel.guild.createChannel(suffix,"text").then(function(channel) {
			message.channel.send("Criando canal de texto" + channel);
		}).catch(function(error){
			message.channel.send("erro ao criar o canal de texto" + error);
		});
	}
};
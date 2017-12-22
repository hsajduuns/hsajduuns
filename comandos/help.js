let comandos = require('../utils/comandos.js');

module.exports = {
	task(client, message) {
	 	let modArray = ['`Meus comandos - Moderação`'],
			entreArray = ['`Meus comandos - Entretenimento`'],
			socialArray = ['`Meus comandos - Social`'],
			mediaArray = ['`Comandos BETA - Testes`'];
		comandos.forEach((k, i) => {
			if (k.categoria == 'Moderação')
				return modArray.push(`**${i}**\n${k.description}`);
			if (k.categoria == 'Entretenimento')
				return entreArray.push(`**${i}**\n${k.description}`);
			if (k.categoria == 'Social')
				return socialArray.push(`**${i}**\n${k.description}`);
			if (k.categoria == 'Beta')
				return mediaArray.push(`**${i}**\n${k.description}`);
		});
		message.author.send({
			embed: {
				description: modArray.join('\n'),
				color: 0xeab600,
			}
		}).then(() => {
			   var rpts = ['https://cdn.dribbble.com/users/784413/screenshots/3818347/mail.gif'];
             var link = rpts[Math.floor(Math.random() * rpts.length)];
          const embed = new Discord.RichEmbed() 

          .setTitle("⚠ Help Solicitado!")
          .setThumbnail(link)
          .setDescription(`📩 Verifique sua mensagens diretas. `)
          .setColor(0xeab600);

          message.channel.send({embed});
			message.react('🇧🇷').then
			message.author.send({
				embed: {
					description: entreArray.join('\n'),
					color: 0xeab600,
				}
			}).then(() => {
				message.author.send({
					embed: {
						description: socialArray.join('\n'),
						color: 0xeab600,
					}
				}).then(() => {
				message.author.send({
					embed: {
						description: mediaArray.join('\n'),
						color: 0xeab600,
					}
				}).then(() => {
					message.author.send({
						embed: {
							color: 0xeab600,
							description: ` 
\`\`\`Expextre v.2 | By I3LACK PANTHER#3173, Dynatrii#4965 e Lord.Archangel#9647.\`\`\` 
[Acessar meu site.]()`
						}
					});
				});
			});
			});
		}).catch(e => {
			if (e && e.code == 50007) 
				message.reply("não posso enviar mensagem pra você :sob:");
		});
	}
};

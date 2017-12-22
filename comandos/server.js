const Discord = require('discord.js');

module.exports = {
    description: '\`\`\`Lhe dá informações do servidor.\`\`\`',
    categoria: 'Social',
    task(client, message) {
        var server = message.guild;
        let id = message.guild.id;
		const embed = new Discord.RichEmbed()
			.setThumbnail(server.iconURL)
			.setAuthor(server.name, server.iconURL)
			.addField(':id: do servidor', `\`\`\`${server.id}\`\`\``, true)
			.addField(':globe_with_meridians: Região', server.region, true)
			.addField('Criado em', server.joinedAt.toDateString(), true)
			.addField(':crown: Supremo do Servidor', server.owner.user, true)
			.addField('ID do Supremo', ` \`\`\`${server.owner.user.id}\`\`\` `, true)
			.addField('Total Membros', ` \`\`\`${server.memberCount}\`\`\` `)
			.addField('Pessoas', `👥 ${server.members.filter(member => !member.user.bot).size}`, true)
			.addField('Bots', ` 🤖 ${server.members.filter(member => member.user.bot).size}`, true)
			.addField('Membros Online', ` ✅ ${server.members.filter(member => member.presence.status == 'online').size}`, true)
			.addField('Membros Offline', ` ⚪ ${server.members.filter(member => member.presence.status === 'offline').size}`, true)
			.addField('Membros Ocupados', ` 🔴 ${server.members.filter(member => member.presence.status == 'dnd').size}`, true)
			.addField('Membros Ausentes', ` ⚠ ${server.members.filter(member => member.presence.status == 'idle').size}`, true)
			.addField(`Canais de Texto:`, `\`\`\`${server.channels.filter(m => m.type === 'text').size}\`\`\``, true)
			.addField('Canais de Voz:', `\`\`\`${server.channels.filter(m => m.type === 'voice').size}\`\`\``, true)
			.addField('Total roles do servidor', `\`\`\`${server.roles.size}\`\`\``)
			.addField('Roles (Apresento apenas 15)', `${client.guilds.get(id).roles.map(r => r).slice(0, 15).join(" - ")}) `)
			.setColor(0xeab600);
    
		message.channel.send({embed});
    }
};
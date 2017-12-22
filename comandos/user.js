const Discord = require('discord.js');

module.exports = {
    description: '\`\`\`Você pode ver informações suas ou de outro usuário mencionando-o\`\`\`',
    categoria: 'Social',
    task(client, message) {
    	let member = message.mentions.members.first() || message.member;
        let user = message.mentions.users.size > 0 ? message.mentions.users.first() : message.author;
        const embed = new Discord.RichEmbed()
			.setThumbnail(user.displayAvatarURL)
			.setAuthor(user.tag, user.avatarURL)
			.addField('Jogando',` \`\`\`${user.presence.game != null ? user.presence.game.name : "Nada"}\`\`\``, true)
			.addField('ID', `\`\`\`${user.id}\`\`\``, true)
			.addField('Apelido dentro do servidor',` \`\`\`${message.member.nickname}\`\`\``, true)
			.addField('Conta criada em', ` \`\`\`${user.createdAt.toDateString()}\`\`\` `, true)
			.addField('Ingressou no servidor em', ` \`\`\`${message.member.joinedAt.toDateString()}\`\`\` `, true)
			.addField('Roles', member.roles.map(roles => `${roles}`).join(', '))
			.setColor(0xeab600);
        
		message.channel.send({ embed });
    }
};
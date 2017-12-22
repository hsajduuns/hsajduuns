const Discord = require("discord.js");


module.exports = {
    description: '\`\`\`Informações das guilds onde o bot se encontra.\`\`\`',
    categoria: 'Social',
    task(client, message, suffix) {
        var server = message.guild;
		const embed = new Discord.RichEmbed()
			
			.setAuthor(server.name, server.iconURL)
			.addField(`Total de Servidores`, `\`\`\`${client.guilds.size.toLocaleString()}\`\`\``, true)
            .addField(`Total de Usuários`, `\`\`\`${client.users.size.toLocaleString()}\`\`\``, true)
            .addField(`Total de canais`, `\`\`\`${client.channels.size.toLocaleString()}\`\`\``, true)
			.addField('Bot Desenvolvido por', `\`\`\`I3LACK PANTHER#3173, Dynatrii#4965 e Lord.Archangel#9647\`\`\``)
			.setColor(0x1a1a1a);

		message.channel.send({embed});
    }
};
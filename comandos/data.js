

module.exports = {
    description: '\`\`\`Verifico uma data e hora completa.\`\`\`',
    categoria: 'Social',
    task(client, message) {
        message.channel.send({
			embed: {
				color: 0xeab600,
				description:`**Data:** ${new Date()}`,
			}
		});
    }
};
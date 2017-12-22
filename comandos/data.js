

module.exports = {
    description: '\`\`\`Verifico uma data e hora completa.\`\`\`',
    categoria: 'Social',
    task(client, message) {
        message.channel.send({
			embed: {
				color: 0x763ebb,
				description:`**Data:** ${new Date()}`,
			}
		});
    }
};
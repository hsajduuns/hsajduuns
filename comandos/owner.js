module.exports = {
    description: '\`\`\`Lhe dou os nomes de meus criadores\`\`\`',
    categoria: 'Social',
    task(client, message) {
        message.channel.send({
			embed: {
				color: 0xeab600,
				description:` **Meus Criadores são:** \n \n @I3LACK PANTHER#3173, Dynatrii#4965 e Lord.Archangel#9647
`,
			}
		});
    }
};
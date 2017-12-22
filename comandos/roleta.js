module.exports = {
    description: '\`\`\`Jogue Roleta Russa\`\`\`',
    categoria: 'Entretenimento',
     cooldown: 15,
    task(client, message) {
        let randomNumber = ~~(Math.random() * (6- 1) + 1);
		if (randomNumber == 2)
			message.reply(" Você morreu! :gun:");
		else
			message.reply(" Sobreviveu! :clap:");
    }
}
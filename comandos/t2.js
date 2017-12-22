	const economy = require('discord-eco');
	
		module.exports = {
    task(client, message, suffix) {
       
    
economy.updateBalance(message.author.id, 500).then((i) => {
message.channel.send(`**You got $500!**\n**New Balance:** ${i.money} `);
    
    
	});
    }
};

let	reload = require('require-reload')(require),
	utils  = reload('../utils/utils.js');

module.exports = {
    description: '\`\`\`Define um filtro \n Filtros disponíveis: invites, words, printscreene conteudosexual. \`\`\`',
    categoria: 'Moderação',
    task(client, message, suffix) {
        let settings = reload('../settings.json');
        if (!message.member.hasPermission('ADMINISTRATOR')) 
    			 return message.reply(':no_entry_sign: Desculpe, o comando **-filter** está disponível apenas para usuários administrativos do server.');
        if (!message.member.hasPermission('MANAGE_MESSAGES'))
		if (!suffix)
		
		return message.channel.send('Você precisa especificar um filtro');
			
		switch (suffix.split(' ')[0]) {
		    case 'invites': {
    			
    			if (!message.member.hasPermission('ADMINISTRATOR'))
    			 return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');
    				if (!settings[message.guild.id]) 
    				settings[message.guild.id] = {};
    			if (!!settings[message.guild.id].filterInvites)
    			    settings[message.guild.id].filterInvites = !settings[message.guild.id].filterInvites;
    			else 
    			    settings[message.guild.id].filterInvites = true;
    			
    			utils.save('settings', 'json', JSON.stringify(settings));
    			return message.channel.send('Filtro de convites definido para ' + settings[message.guild.id].filterInvites);
		    }
		    case 'printscreen': {
    			if (!settings[message.guild.id]) 
    				settings[message.guild.id] = {};
    			if (!!settings[message.guild.id].filterPrintscreen)
    			
    			    settings[message.guild.id].filterPrintscreen = !settings[message.guild.id].filterPrintscreen;
    			else 
    			    settings[message.guild.id].filterPrintscreen = true;
    			
    			utils.save('settings', 'json', JSON.stringify(settings));
    			return message.channel.send('Filtro de prints definido para ' + settings[message.guild.id].filterPrintscreen);
		    }

		    case 'words': {
		    	let words = suffix.split(' ').slice(1);
		    	if (words.length == 0) {
			    	if (!settings[message.guild.id] || !settings[message.guild.id].filterWords)
						return message.channel.send('Este servidor não possui filtro de palavras');
					else
						return message.channel.send('As palavras filtradas nesse servidor são:\n`' + settings[message.guild.id].filterWords.join('` `') + '`');
		    	} else {
			    	if (!settings[message.guild.id]) 
	    				settings[message.guild.id] = {};
					
	    			settings[message.guild.id].filterWords = words.filter(w => w !== ''); // filtra palavras sem nada
	    			
	    			utils.save('settings', 'json', JSON.stringify(settings));
	    			return message.channel.send('Filtro de palavras redefinido');
		    	}}
		}
    }
};
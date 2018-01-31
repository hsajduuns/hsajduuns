const Discord = require("discord.js");
const client  = new Discord.Client();
const config  = require("./config.json");
const fs      = require("fs");
const YTDL = require('ytdl-core');
let	settings = require('./settings.json');
let reload    = require('require-reload')(require),
	points    = reload('./points.json'),
	utils     = reload('./utils/utils.js'),
	comandos  = require('./utils/comandos.js'),
	logger    = new (require('./utils/Logger.js'))(config.logTimestamp),
    database = require('./database.js');

  client.on("error", (e) => console.error(e));
  client.on("warn", (e) => console.warn(e));
  client.on("debug", (e) => console.info(e));

module.exports = {
	task(client, message, name) {
		if (name) {
			let comando = reload(`./comandos/${name}.js`);
			comando.usersOnCooldown = new Set();
			comandos.set(name, comando);
			return message.reply(`:cyclone: | O Comando ** ${name}** foi atualizado!`);
		} else
			return message.reply('Especifique um comando');
	}
};




fs.readdir("./comandos/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(name => {
		let nome = name.split('.')[0];
		require(`./comandos/${name}`).usersOnCooldown = new Set();
		comandos.set(nome, require(`./comandos/${name}`));
	});
});

client.on("ready", (message) => {
   logger.logWithHeader('PRONTO', 'bgGreen', 'black',  `Online! S:${client.guilds.size} | U:${client.users.size}`);
client.user.setPresence({
        status: 'dnd',
        game: {
            name: config.prefix+'sy!!'`| Dev`,
            type: "WATCHING"
        }
});
});

client.on('message', message => {
	let settings = reload('./settings.json');
	if (message.author.bot) return;
	
	if  (!points[message.author.id])
	
		points[message.author.id] = {
			points: 1,
			level: 0,

		};
		
	let userData = points[message.author.id];
    userData.points++;
	
	utils.save('points', 'json', JSON.stringify(points));
	
	let curLevel = ~~(userData.points / 100);    

let comando = message.content.replace(config.prefix, '').split(/ |\n/)[0],
		suffix  = message.content.replace(config.prefix + comando, '').trim();
		
	if (message.content.startsWith(config.prefix) && comandos.has(comando)) {
		logger.logCommand(message.guild === undefined ? null : message.guild.name, message.author.username, config.prefix + comando, message.cleanContent.replace(config.prefix + comando, '').trim());
		comando = comandos.get(comando.toLowerCase());
		if (comando.usersOnCooldown.has(message.author.id))
			return message.reply(':warning: Você só pode utilizar este comando a cada ' + comando.cooldown + ' segundos!').then(sentMsg => sentMsg.delete(8000));
		else {
			comando.task(client, message, suffix);
			if (comando.cooldown) {
				comando.usersOnCooldown.add(message.author.id);
				setTimeout(() => {
					comando.usersOnCooldown.delete(message.author.id);
				}, comando.cooldown * 1000);
			}
		}
	}




	
	if (message.guild) {
		
		if (settings[message.guild.id] && settings[message.guild.id].sugestao && message.channel.id == settings[message.guild.id].sugestao)
	    	message.react('👍').then(message.react('👎'));

		if (settings[message.guild.id] && settings[message.guild.id].filterInvites && message.content.search(/https?:\/\/discord.gg\/.+/gi) > -1) {
			message.delete();
			return message.reply(":x: Você não pode divulgar outros servidores aqui!").then(sentMsg => sentMsg.delete(3000));
		}
			if (settings[message.guild.id] && settings[message.guild.id].filterPrintscreen && message.content.search(/https?:\/\/prntscr.com\/.+/gi) > -1) {
			message.delete(1000);
			return message.reply(":x: Este servidor não permite compartilhamento de printScreen!").then(sentMsg => sentMsg.delete(3000));
		}
	
		if (settings[message.guild.id] && settings[message.guild.id].filterWords) {
			settings[message.guild.id].filterWords.every(e => {
				if (message.content.search(new RegExp(`\\b${e}\\b`, 'gi')) > -1) {
					message.delete();
					message.reply(" Cuidado com o palavreado!! :rage:").then(sentMsg => sentMsg.delete(3000));
					return false;
				} else return true;
			});
		
		}
		
	}
});



client.on('guildMemberAdd', member => {
	let settings = reload('./settings.json');

	if (settings[member.guild.id] && settings[member.guild.id].autorole)
		member.addRole(settings[member.guild.id].autorole);
	if (settings[member.guild.id] && settings[member.guild.id].welcome) {
		let mensagem = settings[member.guild.id].welcome.replace(/\$\{USER\}/gi, member.user.username).replace(/\$\{SERVER\}/gi, member.guild.name).replace(/\$\{MENTION\}/gi, member.user);
		client.channels.get(settings[member.guild.id].welcomeChannel).send(mensagem);
	}
});

client.on('guildMemberRemove', member => {
	let settings = reload('./settings.json');
	
	if (settings[member.guild.id] && settings[member.guild.id].remove) {
		let mensagem = settings[member.guild.id].remove.replace(/\$\{USER\}/gi, member.user.username).replace(/\$\{SERVER\}/gi, member.guild.name).replace(/\$\{MENTION\}/gi, member.user);
		client.channels.get(settings[member.guild.id].removeChannel).send(mensagem);
	}
});



client.on('roleCreate', (role, message) => {
    if (settings[role.guild.id] && settings[role.guild.id].logging)
        role.guild.channels.get(settings[role.guild.id].logging).send({embed: {
	    color: 0xeab600,
	    title: "Moderators LOG",
	    url: "https://discordapp.com/",
	    description: "mod-log Sysop BOT",
	    fields: [{
	    	 name: ":gear: Nova Role",
        value: `Cargo ${role} criado no servidor.`
      }
    ],
       timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Sysop | BOT"
    }
  }
});
}); 

client.on('roleDelete', role => {
    if (settings[role.guild.id] && settings[role.guild.id].logging)
        role.guild.channels.get(settings[role.guild.id].logging).send({embed: {
	    color: 0xeab600,
	    title: "Moderators LOG",
	    url: "https://discordapp.com/",
	    description: "mod-log Sysop BOT",
	    fields: [{
	    	 name: ":gear: Role Deletada",
        value: `Cargo **${role.name}** deletada do servidor.`
      }
    ],
       timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Sysop | BOT"
    }
  }
});
});

client.on('emojiCreate', emoji => {
    if (settings[emoji.guild.id] && settings[emoji.guild.id].logging)
        emoji.guild.channels.get(settings[emoji.guild.id].logging).send({embed: {
	    color: 0xeab600,
	    title: "Moderators LOG",
	    url: "https://discordapp.com/",
	    description: "mod-log Sysop BOT",
	    fields: [{
	    	 name: ":gear: Novo emoji",
        value: ` ${emoji}`
      },
      {
      name: "Author",
      value: `${client.user}`,
    }],
       timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Sysop | BOT"
    }
  }
});
});


client.on('emojiDelete', emoji => {
    if (settings[emoji.guild.id] && settings[emoji.guild.id].logging)
        emoji.guild.channels.get(settings[emoji.guild.id].logging).send({embed: {
	    color: 0xeab600,
	    title: "Moderators LOG",
	    url: "https://discordapp.com/",
	    description: "mod-log Sysop BOT",
	    fields: [{
	    	 name: ":gear: Emoji Deletada",
        value: ` ${emoji.name}`
      },
      {
      name: "Author",
      value: `${client.user}`,
    }],
       timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Sysop | BOT"
    }
  }
});
});

client.on('messageDelete', message => {
	let user = message.mentions.users.size > 0 ? message.mentions.users.first() : message.author;
    if (settings[message.guild.id] && settings[message.guild.id].logging)
        message.guild.channels.get(settings[message.guild.id].logging).send({embed: {
	    color: 0xeab600,
	    author: {
      name: user.tag,
      icon_url: user.avatarURL
    },
	    title: "Moderators LOG",
	    url: "https://discordapp.com/",
	    description: "mod-log Sysop BOT",
	    fields: [{
	    	 name: ":wastebasket: Mensagem deletada",
        value: ` \`\`\`${message.content}\`\`\` `
      },
      {
      name: "Author da mensagem",
      value: `${user}`,
    }],
       timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Sysop | BOT"
    }
  }
        });
});
 

client.on('guildMemberAdd', (member, message) => {
    if (settings[member.guild.id] && settings[member.guild.id].logging)
        member.guild.channels.get(settings[member.guild.id].logging).send({embed: {
	    color: 0xeab600,
	    author: {
      name: client.user.tag,
      icon_url: client.user.avatarURL
    },
	    title: "Moderators LOG",
	    url: "https://discordapp.com/",
	    description: "mod-log Sysop BOT",
	    fields: [{
	    	 name: "Novo usuário",
        value: `${member} `
      }],
       timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Sysop | BOT"
    }
  }
        });
});
client.on('guildMemberRemove', (member,members, message) => {
    if (settings[member.guild.id] && settings[member.guild.id].logging)
        member.guild.channels.get(settings[member.guild.id].logging).send({embed: {
	    color: 0xeab600,
	    author: {
      name: client.user.tag,
      icon_url: client.user.avatarURL
    },
	    title: "Moderators LOG",
	    url: "https://discordapp.com/",
	    description: "mod-log Sysop BOT",
	    fields: [{
	    	 name: "Usuário Desconectado",
        value: ` ${member} deixou o servidor.`
      }],
       timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Sysop | BOT"
    }
  }
        });
});

client.on('guildBanAdd', (guild, user) => {
    if (settings[guild.id] && settings[guild.id].logging)
        guild.channels.get(settings[guild.id].logging).send({embed: {
	    color: 0xeab600,
	    author: {
      name: client.user.tag,
      icon_url: client.user.avatarURL
    },
	    title: "Moderators LOG",
	    url: "https://discordapp.com/",
	    description: "mod-log Sysop BOT",
	    fields: [{
	    	 name: ":no_entry_sign:  Usuário Banido do servidor",
        value: ` ${user} banido deste servidor.`
      }],
       timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Sysop | BOT"
    }
  }
        });
});

client.on('channelCreate', (channel, guild) => {
    if (!channel.guild) return; if (settings[channel.guild.id] && settings[channel.guild.id].logging)
        channel.guild.channels.get(settings[channel.guild.id].logging).send({embed: {
	    color: 0xeab600,
	    author: {
      name: client.user.tag,
      icon_url: client.user.avatarURL
    },
	    title: "Moderators LOG",
	    url: "https://discordapp.com/",
	    description: "mod-log Sysop BOT",
	    fields: [{
	    	 name: ":white_check_mark: Novo canal",
        value: ` Canal ${channel} criado no servidor.`
	    },
        {
        name: "Author",
      value: `${client.user}`,
      }],
       timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Sysop | BOT"
    }
  }
        });
});

client.on('channelDelete', (channel, guild) => {
    if (!channel.guild) return; if (settings[channel.guild.id] && settings[channel.guild.id].logging)
        channel.guild.channels.get(settings[channel.guild.id].logging).send({embed: {
	    color: 0xeab600,
	    author: {
      name: client.user.tag,
      icon_url: client.user.avatarURL
    },
	    title: "Moderators LOG",
	    url: "https://discordapp.com/",
	    description: "mod-log Sysop BOT",
	    fields: [{
	    	 name: ":white_check_mark: Canal Deletado",
        value: ` Canal ${channel.name} deletado do servidor`
      },
       {
        name: "Author",
      value: `${client.user}`,
      }],
       timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Sysop | BOT"
    }
  }
        });
});


client.on('guildCreate', (guild) => {
guild.members.filter(member => member.hasPermission('MANAGE_GUILD') && member.user.send('Olá, obrigado por me adicionar em seu servidor, espero fazer muitas coisas boas ao seu lado e poder ajudar seu servidor.  \n Caso tenhas dúvidas ou interesse em ficar ligado em nossas atualizações, entre em nosso servidor Oficial: https://discord.gg/CGuyBJF'));
});


client.login(process.env.TOKEN);

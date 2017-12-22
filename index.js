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
        status: 'idle',
        game: {
            name: config.prefix+`help | 🎄`
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



client.on('roleCreate', role => {
    if (settings[role.guild.id] && settings[role.guild.id].logging)
        role.guild.channels.get(settings[role.guild.id].logging).send({embed: {description: ` :gear: **Novas Roles** \n \n  ${role} - O cargo ${role.name} foi criado neste servidor. `, color: 0x763ebb}});
}); 

client.on('roleDelete', role => {
    if (settings[role.guild.id] && settings[role.guild.id].logging)
        role.guild.channels.get(settings[role.guild.id].logging).send({embed: {description: ` :wastebasket: **Roles Deletadas** \n \n  O cargo **${role.name}** foi deletado deste servidor. `, color: 0x763ebb}});
});

client.on('emojiCreate', emoji => {
    if (settings[emoji.guild.id] && settings[emoji.guild.id].logging)
        emoji.guild.channels.get(settings[emoji.guild.id].logging).send({embed: {description: ` :gear: **Novos Emojis** \n \n Um novo emoji foi criado: ${emoji} `, color: 0x763ebb}});
});

client.on('emojiDelete', emoji => {
    if (settings[emoji.guild.id] && settings[emoji.guild.id].logging)
        emoji.guild.channels.get(settings[emoji.guild.id].logging).send({embed: {description: ` :wastebasket: **Emoji Deletados** \n \n  Emoji ${emoji} deletado deste servidor. `, color: 0x763ebb}});
});

client.on('messageDelete', message => {
    if (settings[message.guild.id] && settings[message.guild.id].logging)
        message.guild.channels.get(settings[message.guild.id].logging).send({embed: {description: ` :wastebasket: **Mensagens Deletadas** \n \n -------------------------------- \n ${message.author} teve sua mensagem deletada. \n -------------------------------- \n **Mensagem:**  \`\`\`${message.content}\`\`\` `, color: 0x763ebb}});
});

client.on('guildMemberAdd', (member) => {
    if (settings[member.guild.id] && settings[member.guild.id].logging)
        member.guild.channels.get(settings[member.guild.id].logging).send({embed: {description: ` :inbox_tray: **Novo usuário** \n \n ${member} Entrou no servidor. `, color: 0x763ebb}});
});
client.on('guildMemberRemove', (member, guild) => {
    if (settings[member.guild.id] && settings[member.guild.id].logging)
        member.guild.channels.get(settings[member.guild.id].logging).send({embed: {description: ` :outbox_tray: **Usuário desconectado** \n \n ${member} deixou o servidor. `, color: 0x763ebb}});
});

client.on('guildBanAdd', (guild, user) => {
    if (settings[guild.id] && settings[guild.id].logging)
        guild.channels.get(settings[guild.id].logging).send({embed: {description: ` :no_entry: **Membro banido** \n \n ${user} foi banido deste servidor.`, color: 0x763ebb}});
});

client.on('channelCreate', (channel) => {
    if (!channel.guild) return; if (settings[channel.guild.id] && settings[channel.guild.id].logging)
        channel.guild.channels.get(settings[channel.guild.id].logging).send({embed: {description: ` :gear: **Novo Canal** \n \n Canal ${channel} foi criado no servidor. `, color: 0x763ebb}});
});

client.on('channelDelete', (channel) => {
    if (!channel.guild) return; if (settings[channel.guild.id] && settings[channel.guild.id].logging)
        channel.guild.channels.get(settings[channel.guild.id].logging).send({embed: {description: ` :wastebasket: **Canal Deletado** \n \n Canal **${channel.name}** deletado do servidor. `, color: 0x763ebb}});
});

client.login(process.env.TOKEN);

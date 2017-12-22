module.exports = {
    description: '\`\`\`Doe para o bot.\`\`\`',
    categoria: 'Social',
     cooldown: 15,
        task(client, message) {
        message.channel.send({
			embed: {
				color: 0x763ebb,
				description:`
▬▬▬▬▬▬▬▬▬▬▬▬▬  DOAR  ▬▬▬▬▬▬▬▬▬▬▬▬▬
**A doação para o Bot ajuda a nos manter ele ativo e atualizado a todo momento.**

:flag_br: :moneybag:  __Pagseguro:__ [Clique para doar]()
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
Doando para o **Sysbot**, você tem os seguintes benefícios:

:white_small_square: Cargo de Patreons no Servidor Oficial
:white_small_square: Commando de doadores
:white_small_square: E muitos outros benefícios virão.
:white_small_square: Doadores ganham uma versão PRO do bot.
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
				`,
			}
		});
    }
};
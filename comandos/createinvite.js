module.exports = {
    description: '\`\`\`Gere um link de convites do servidor.\`\`\`',
    categoria: 'Moderação',
    task(client, message, suffix) {

if (!message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send(":x: Você não tem permissão para utilizar este comando!");

var id = message.channel.id;
message.guild.channels.get(id).createInvite({
    maxAge: 0       //maxAge: 0 significa que el link sera permanente

}).then(invite =>  
    message.channel.send(` **Novo Convite gerado!** \n ${invite.url}`)
);
}};
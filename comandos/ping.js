const Discord = require("discord.js");

module.exports ={
    description: '\`\`\`Respondo pong!.\`\`\`',
    categoria: 'Social',
     cooldown: 15,
    task(client, message, suffix) {
      
        
let ping = Math.floor(message.client.ping); 

if (ping > 300) {
    var embed = new Discord.RichEmbed().setDescription(":satellite: Pong! **" + ping + "ms.**")
    .setColor(0x763ebb)
    message.channel.sendEmbed(embed);
    

} else if (ping > 150) {
    var embed = new Discord.RichEmbed().setDescription(":satellite: Pong! **" + ping + "ms.**")
    .setColor(0x763ebb)
    message.channel.sendEmbed(embed);


} else {
    var embed = new Discord.RichEmbed().setDescription(":satellite: Pong! **" + ping + "ms.**")
    .setColor(0x763ebb)
    message.channel.sendEmbed(embed);

}}}



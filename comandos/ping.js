const Discord = require("discord.js");

module.exports ={
    description: '\`\`\`Respondo pong!.\`\`\`',
    categoria: 'Social',
     cooldown: 15,
    task(client, message, suffix) {
      
        
let ping = Math.floor(message.client.ping); 

if (ping > 150 ) {
      var embed = new Discord.RichEmbed().setDescription("ðŸ“¡ Pong! **" + ping + "ms.** ")
      .setColor(0xFFA500)
      message.channel.send(embed);
      
  
  } else if (ping > 100) {
    var embed = new Discord.RichEmbed().setDescription("ðŸ“¡ Pong! **" + ping + "ms.**")
    .setColor(0xFFD700)
    message.channel.send(embed);
} 
  
  else if (ping > 50) {
      var embed = new Discord.RichEmbed().setDescription("ðŸ“¡ Pong! **" + ping + "ms.**")
      .setColor(0xFFD700)
      message.channel.send(embed);
  
  
  } else {
      var embed = new Discord.RichEmbed().setDescription("ðŸ“¡ Pong! **" + ping + "ms.**")
      .setColor(0x00FF00)
      message.channel.send(embed);
  }}}



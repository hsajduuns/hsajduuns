const Discord = require("discord.js");

module.exports ={
    description: '\`\`\`Respondo pong!.\`\`\`',
    categoria: 'Social',
     cooldown: 15,
    task(client, message, suffix) {
      
        
let ping = Math.floor(message.client.ping); 

if (ping > 150 ) {
      var embed = new Discord.RichEmbed().setDescription(":satellite_orbital: Pong! **" + ping + "ms.** ")
      .setColor(0xeab600)
      message.channel.send(embed);
      
  
  } else if (ping > 100) {
    var embed = new Discord.RichEmbed().setDescription(":satellite_orbital:  Pong! **" + ping + "ms.**")
    .setColor(0xeab600)
    message.channel.send(embed);
} 
  
  else if (ping > 50) {
      var embed = new Discord.RichEmbed().setDescription(":satellite_orbital:  Pong! **" + ping + "ms.**")
      .setColor(0xeab600)
      message.channel.send(embed);
  
  
  } else {
      var embed = new Discord.RichEmbed().setDescription(":satellite_orbital: Pong! **" + ping + "ms.**")
      .setColor(0xeab600)
      message.channel.send(embed);
  }}}



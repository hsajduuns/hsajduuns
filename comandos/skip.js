
module.exports = {
    task(client, message, suffix) {

   if(message.author.id !== '244489368717230090') return message.reply("Apenas o proprietário do bot pode usar esse comando.");

      let player = client.voiceConnections.get('server', message.server);
      if(!player || !player.playing) return client.sendMessage(message, 'The bot is not playing');
      player.stopPlaying()
      client.sendMessage(message, 'Skipping song...');
    
}
  };
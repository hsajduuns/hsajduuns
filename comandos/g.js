

module.exports = {
        task(client, message, suffix) {
                  let voiceChannel = message.member.voiceChannel;
    if(!voiceChannel) return message.channel.send('Conecte-se a um canal de voz primeiro.');
        voiceChannel.join().then(conexion =>{
        conexion.playStream('http://stream.electroradio.fm:80/192k/;');
        message.channel.send('Radio ativada.')
        return;
      })
      .catch(console.error);
  }
        };
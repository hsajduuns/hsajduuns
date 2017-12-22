 var imgur = require("imgur")
   imgur.setAPIUrl('https://api.imgur.com/3/');
   imgur.getAPIUrl();

module.exports = {
        task(client, message) {
     if(message.attachments.size < 1) {
       message.channel.send('Envie uma imagem para começar..')
     } else {

      //

       if(message.attachments.first().url.endsWith('png') || message.attachments.first().url.endsWith('jpg') || message.attachments.first().url.endsWith('gif')) {
         imgur.uploadUrl(message.attachments.first().url).then(function (json) {
           message.channel.send('Imagem upada: ' + json.data.link)
         }).catch(function (err) {

          //
          
           message.channel.send('Falha ao tentar enviar...')
         })
       } else {

//
         message.channel.send('Só Suporto arquivos png, jpg e gif...')
       }
     }
    }};
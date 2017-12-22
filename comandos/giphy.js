

module.exports = {
     description: '\`\`\`Pesquise GIF online de qualquer coisa.\`\`\`',
    categoria: 'Entretenimento',
    task(client, message,suffix) {


var giphy = require('giphy-api')();

if(!suffix) return  message.channel.send('Defina algo para buscar');

message.channel.send(':arrows_counterclockwise: Pesquisando')
.then(m => {
       giphy.random(suffix, function(err, res){
       if(err){
         return console.log(err);
       }
       if(!res.data.url){
         return message.channel.send('Zero resultado encontrado.');
       }

       let key = res.data.url.substr(res.data.url.lastIndexOf('-') + 1);
       let url = `https://media.giphy.com/media/${key}/giphy.gif`;

       m.edit(url);
      });
});
}};

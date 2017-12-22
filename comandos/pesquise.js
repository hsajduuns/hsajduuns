module.exports = {
    description: '\`\`\`Pesquise vídeos no YouTube\`\`\`',
    categoria: 'Social',
    task(client, message, suffix, error) {
        
const YouTube = require('youtube-node');
let youTube = new YouTube();

//Necesita tener una clave para usar la API de YouTube Data API v3
//video tutorial: https://www.youtube.com/watch?v=Im69kzhpR3I
youTube.setKey(process.env.YTKEY);

if(!suffix) return  message.channel.send('Você deve definar algo para pesquisa');
message.channel.send(':mag_right: Pesquisando..')
.then(m => {
    youTube.search(suffix, 2, function(err, result){
        if(err){
            return console.log(error); 

        }
        if(result.items[0]["id"].videoId == undefined){
            return message.channel.send('Nenhum resultado encontrado');

        } else{
            let link = `**Encontrado:** https://www.youtube.com/watch?v=${result.items[0]["id"].videoId}`
            m.edit(link);

        }
    })
})}}
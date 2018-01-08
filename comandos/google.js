module.exports = {
    description: '\`\`\`Pesquise no GOOGLE.\`\`\`',
    categoria: 'Social',
    cooldown: 5,
    task(client, message, suffix) {
        if (!['244489368717230090','106915215592923136'].includes(message.author.id)) return message.reply("This command is not available to users.");
      const cheerio = require('cheerio'),
      snekfetch = require('snekfetch'),
      querystring = require('querystring');

//Esta variable gerena una URL de nuestra busqueda/consulta (args)
let buscarUrl = `https://www.google.com/search?q=${encodeURIComponent(suffix)}`;

message.channel.send(':mag_right:  **Pesquisando...** ')
.then(m =>{
        //Ahora usamos snekfetch para rastrear en Google.com
        return snekfetch.get(buscarUrl).then((result) =>{

              //Cheerio nos permite analizar el HTML en su resultado de google para tomar la URL
              let $ = cheerio.load(result.text);

              //la variable googleData nos permite tomar la URL desde la instancia de la página (HTML)
              let googleData = $('.r').eq(0).find('a').first(1).attr('href');
              
              //Ahora que tenemos nuestros datos de Google, podemos enviarlos al canal.
              googleData = querystring.parse(googleData.replace('/url?', ''));
              
              //resultado de busqueda
              m.edit(`Resultados para **${suffix}** \n :satellite_orbital: ${googleData.q}`);
        //Usamos nuestro bloque catch, Si no se encuentran resultados.
        }).catch((err) => {
              m.edit(':no_entry: Não há resultados encontrados!');
        });

});
}};

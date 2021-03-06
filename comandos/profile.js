const Discord = require("discord.js");
let reload = require('require-reload')(require),
    utils  = reload('../utils/utils.js');

module.exports = {
    description: '\`\`\`Verifico seu level global\`\`\`',
    categoria: 'Entretenimento',
    task(client, message) {
      
         let user = message.mentions.users.size > 0 ? message.mentions.users.first() : message.author;
        
        let points   = reload('../points.json');
        if (!points[message.author.id])
            points[message.author.id] = {
                points: 1,
                level: 0,
                username: message.author.username
            };
        utils.save('points', 'json', JSON.stringify(points));
        let userData = points[message.author.id];
var Jimp = require("jimp");
var server = message.guild;
  
user =  message.mentions[0] || message.author;
let p1      = Jimp.read(user.avatarURL);
let p2   = Jimp.read('imagens/profile-sysop.png');
let p3 =   Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
let p4 =   Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
let p5  =  Jimp.read("https://cloud.githubusercontent.com/assets/414918/11165709/051d10b0-8b0f-11e5-864a-20ef0bada8d6.png");
Promise.all([p1, p2, p3, p4, p5]).then(function (images) {
  

      let img = images[0];
      let lv = images[1];
      let fuente = images[2];
      let fuente2 = images[3];
      let mask = images[4]
  
      mask.resize(160, 160);
      img.resize(160, 160);
      img.mask(mask, 0, 0);
      lv.print(fuente, 120, 270, `${userData.level}`, 27);
      lv.print(fuente, 140, 315, `${userData.points}`, 425);
      lv.print(fuente2, 117, 200, `${user.tag}`);
      lv.print(fuente2, 140, 465, `${server.name}`);

                lv.composite(img, 129, 14).getBuffer(Jimp.MIME_PNG, (err, image) => {
                      if (err) throw err;
                       message.channel.send(`${message.author} seu perfil.`,new Discord.Attachment(image, 'profile-sysop.png'))
                      
           })
             }
)          
}};

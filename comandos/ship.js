let comandos = new Map();
module.exports = comandos;

const Discord = require("discord.js");
module.exports = {
    description: `\`\`\`Calcule o seu amor ou de outros usuários\`\`\``,
    categoria: `Entretenimento`,
        task(client, message) {

let userm = message.mentions.users.first()
  let userm2 = message.mentions.users.last()
  
        
  let nome = message.mentions.users.first()
  let nome2 = message.mentions.users.last()
  if (!nome) 
  return message.reply('Mencione dois usuários para calcular.');
  if (!nome2) 
  return message.reply('Mencione dois usuários para calcular.');
     
       
       const random = Math.floor(Math.random() * 100);
       
       var Jimp = require("jimp");
       var server = message.guild;
         
       let user =  message.mentions[0] || message.author;
       let p1  = Jimp.read(userm.avatarURL);
       let p2  = Jimp.read('https://i.imgur.com/yavtAFw.png');
       let p3 =   Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
       let p4 =   Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
       let p5  =  Jimp.read("https://cloud.githubusercontent.com/assets/414918/11165709/051d10b0-8b0f-11e5-864a-20ef0bada8d6.png");
       let p6  =  Jimp.read("https://cloud.githubusercontent.com/assets/414918/11165709/051d10b0-8b0f-11e5-864a-20ef0bada8d6.png");
       let p7  = Jimp.read(userm2.avatarURL);
       Promise.all([p1, p2, p3, p4, p5, p6, p7]).then(function (images) {
         
       
             let img = images[0];
             let lv = images[1];
             let fuente = images[2];
             let fuente2 = images[3];
             let mask = images[4];
             let img2 = images[6];
             let mask2 = images[5];
         
       
             mask.resize(120, 120);
             img.resize(120, 120);
             img.mask(mask, 0, 0);
             mask2.resize(120, 120);
             img2.resize(120, 120);
             img2.mask(mask2, 0, 0);
             lv.print(fuente, 195, 20, `${message.mentions.users.first().username.substring(0,5) + message.mentions.users.last().username.substring(message.mentions.users.last().username.length - 4,message.mentions.users.last().username.length)}`);
             lv.print(fuente2, 217, 105, `${random}%`);
       
       
       
                             
                       lv.composite(img, 43, 46).composite(img2, 361, 46).getBuffer(Jimp.MIME_PNG, (err, image) => {
                      
                             if (err) throw err;
                              message.channel.send(`${message.author}`,new Discord.Attachment(image, 'love-random.png'));
                       })
       });
        }
};

const Discord = require("discord.js");
module.exports = {
    description: '\`\`\`Gere alguns memes aleatótios\`\`\`',
    categoria: 'Entretenimento',
        task(client, message) {

 
 const memes = [
   "https://www.gerarmemes.com.br/uploads/galeria/meme-420-chico-buarque-gerador-de-memes.jpg",
   "https://i.ytimg.com/vi/4qJtkeW95G4/hqdefault.jpg",
   "https://cdn.vox-cdn.com/thumbor/ZROlarAjWbjX5nCxiZNUPnwXwRk=/148x0:1768x1080/1200x800/filters:focal(148x0:1768x1080)/cdn.vox-cdn.com/uploads/chorus_image/image/46147742/cute-success-kid-1920x1080.0.0.jpg",
   "https://i.pinimg.com/736x/aa/01/19/aa0119bc270ef4f39dbd7ff657007d64--book-jacket-humor.jpg",
   "https://i.ytimg.com/vi/OJWgOklv9so/maxresdefault.jpg",
   "https://i.ytimg.com/vi/HOjTN8-0JAc/maxresdefault.jpg",
   "http://brcdn03.mundotkm.com/2016/04/115066-600x344.jpg",
   "https://s-media-cache-ak0.pinimg.com/originals/68/c0/4b/68c04bebac713725ec572866799812a5.jpg",
   "https://s-media-cache-ak0.pinimg.com/originals/c9/89/d0/c989d0ee721cebf1345a9afab96d53b6.jpg",
   "https://s-media-cache-ak0.pinimg.com/originals/26/7b/29/267b29b5d66b3ec511d169feafd55b13.jpg",
   "https://upload.wikimedia.org/wikipedia/commons/3/39/VinDiesel_s%C3%B3sia_sorrino.png",
   "https://data.whicdn.com/images/273388339/large.jpg",
   "https://i.pinimg.com/736x/88/18/67/881867f116bfc4b8f8483ccf69ec9d55--memes-humor-gardenia.jpg",
   "http://geradormemes.com/media/created/neg6ii.jpg",
   "https://pbs.twimg.com/media/CpHKJmPXgAAVUI_.jpg",
   "http://www.diarioonline.com.br/img/noticias/original/destaque-385152-memezzzz.jpg",
   "http://geradormemes.com/media/created/jdqbwn.jpg",
   "http://www.tirinhasmemes.net/wp-content/uploads/2012/03/matematica-pra-mim-e-1-mais-1-macumba-armadilha-satanas-obra-tinhoso-plano-maligno.jpg",
   "http://jovempan.uol.com.br/wp-content/uploads/2017/04/1689542504-john-travolta-domina-web-com-meme-confuso-veja-os-melhores.gif",
   "https://imgwpp.imagy.com.br/wp-content/uploads/2017/03/memes-do-silvio-santos-imitar-ja-ta-chato.jpg",
   "https://pbs.twimg.com/media/CTLXBSzXIAAPdeL.jpg:large",
   "http://www.diarioonline.com.br/img/noticias/original/destaque-299460-samara1.jpg",
   "https://images.uncyc.org/pt/thumb/e/ea/52e4540e4beb6.jpeg/300px-52e4540e4beb6.jpeg",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI7NdZBObVPn12taNN9Cxzs_fiUqRT7-KZvsKLrlpoXUf_5dJm",
   "http://www.tirinhasmemes.net/wp-content/uploads/2012/04/eike-batista-quem-quer-dinheiro-fodeu-tirinhas-memes-net.jpg",
   "http://img.ibxk.com.br/ns/rexposta/2016/06/27/27182748419416.jpg?watermark=neaki&watermark=neaki",
   "http://geradormemes.com/media/created/1anfgo.jpg",
   "https://pm1.narvii.com/6362/5c1789e1b87d092223eb89e4a08943e8a3e4a8ef_hq.jpg",
   "http://www.mirandella.com.br/wp-content/uploads/2013/08/1176200_649910638366840_1431284875_n.jpg",
   "https://s-media-cache-ak0.pinimg.com/originals/ca/e5/78/cae5784796b0fd8f9fa8f6cfe9b3b035.jpg",
   "https://www.tirinhasmemes.net/wp-content/uploads/2012/11/normal-mamae-passou-acucar-em-mim-huahuahua-tirinhas-memes-net.jpg",
   "https://s-media-cache-ak0.pinimg.com/originals/92/82/9a/92829a7422ce0eef4ba5b208962ff005.png",
   "https://pm1.narvii.com/6497/cba1798620d505859fc1e43f6dbda05ca10c5ada_hq.jpg",
   "https://mensagenswhatsapp.files.wordpress.com/2015/09/wpid-wp-1442292745625.jpeg"
     ];


const embed = new Discord.RichEmbed()
    .setImage(memes[Math.floor(memes.length * Math.random())])
    .setColor(0xeab600)
message.channel.send({embed});
}};
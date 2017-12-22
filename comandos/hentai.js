const Discord = require("discord.js");
module.exports = {
    description: '\`\`\`Obtenha alguns HENTAIS (Conteúdo Adulto!)\`\`\`',
    categoria: 'Entretenimento',
        task(client, message) {
if(!message.channel.nsfw) return message.channel.send('Este canal não permite NSFW(Conteúdo Adulto), certifique de ativá-lo nas configurações do canal.');

 
 const hentai = [
     "https://hentaixvideos.net/wp-content/uploads/2017/07/naruto-botou-tsunade-pra-sentar-na-pica-naruto-hentai-cartoon-porno-1.jpg",
     "https://cdnio.luscious.net/373/lusciousnet_1092061-bloom-brandon-w_840300854.640x0.jpg",
     "https://img-hw.xnxx-cdn.com/videos/thumbslll/2d/04/ab/2d04ab2b8bc77de20d356b856d3f70ac/2d04ab2b8bc77de20d356b856d3f70ac.7.jpg",
     "https://cdnio.luscious.net/824/lusciousnet_1081464-crystal-flora-h_1825457112.640x0.jpg",
     "https://cdnio.luscious.net/797/lusciousnet_winx_club_08f99e167a40d_328125552.315x0.jpg",
     "https://cdnio.luscious.net/364/lusciousnet_1082517-layla-stella-wi_2074011327.1024x0.jpg",
     "https://cdnio.luscious.net/736/ani-fuck-3_379858903.gif",
     "http://danbooru.donmai.us/cached/data/sample/__hyuuga_hinata_hentai_key_and_naruto__sample-c3e538ca9851210c4e6b1c5de0e718a6.jpg",
     "https://cs.sankakucomplex.com/data/66/f8/66f885875f4864c3d958fdd42f2a9f9d.gif?e=1511656380&m=-FUiFCC-4vI_rX9dkCRutA",
     "https://danbooru.donmai.us/cached/data/sample/__bulma_dragon_ball_and_dragon_ball_z_drawn_by_pink_doragon_and_someoka_yusura__sample-6a8b647b2425711fe074be3383f520c7.jpg",
     "https://images.sex.com/images/pinporn/2014/12/08/620/9439447.gif",
     "http://imagezog.com/uploads/pins/2014/05/medium/amazing-anime-porn-picture-with-a-hawt-booty.gif",
     "https://images.sex.com/images/pinporn/2014/10/25/620/8745777.gif",
     "https://www.anituba.net/wp-content/uploads/2017/06/hentai-1.jpg",
     "https://konachan.com/image/f484bd82d6d0e30300749523e126d077/Konachan.com%20-%20127884%20anus%20bow%20breasts%20censored%20cum%20green_eyes%20mikamin%20nipples%20original%20pink_hair%20pussy.jpg",
     "https://cdnio.luscious.net/726/761516-blazblue-noel_vermillion_1239197224.1024x0.jpg",
     "https://konachan.com/sample/411ece5a6b90853b35e7ebf7ec34acd7/Konachan.com%20-%20187609%20sample.jpg",
     "https://baixarhentai.net/sites/default/files/conteudo-eponline/2016/05/baka-na-imouto-o-rikou-ni-suru-no-wa-ore-no-xx-dake-na-ken-ni-tsuite-02-178.jpg",
     "https://pbs.twimg.com/media/DDdedVxUAAAqB7E.jpg",
     "https://pbs.twimg.com/media/Cl0rhZlUgAAvUCZ.jpg",
     "https://pbs.twimg.com/media/BjZ8rJ6CMAANnzX.jpg:large",
     "https://cdnio.luscious.net/221/lusciousnet_153_17cns_988735979.640x0.jpg",
     "http://danbooru.donmai.us/cached/data/sample/__nami_one_piece_drawn_by_hanazuka_ryouji__sample-452ffdd6174aba92070644ef15cd03ba.jpg",
     "https://danbooru.donmai.us/cached/data/sample/__hiraga_saito_and_tiffania_westwood_zero_no_tsukaima_drawn_by_abu__sample-591a3fbd1004e32c1ec3859dbff7e18c.jpg",
     "https://danbooru.donmai.us/cached/data/__lucy_maria_misora_to_heart_2_and_to_heart_2_xrated_drawn_by_kawata_hisashi__a1d5975e4d009713f16f0a623991a4bb.gif",
     "https://konachan.com/image/42ed41233679ccbf5119710bb1090cf2/Konachan.com%20-%2071484%20bicolored_eyes%20bikini%20breasts%20chu_x_chu%20chua_churam%20erect_nipples%20jpeg_artifacts%20navel%20pink_hair%20shirt_lift%20swimsuit.jpg",
     "https://danbooru.donmai.us/data/sample/__leah_claudius_god_eater_and_god_eater_2_rage_burst_drawn_by_watanuki_kaname__sample-f39a88291089ee977638c53843f685bf.jpg",
     "https://danbooru.donmai.us/data/sample/__yamato_kantai_collection_and_kantai_collection_anime_drawn_by_maca_macaca12__sample-1c76c5df9f88b2a6635320a5e3ae2cd6.jpg",
     "http://danbooru.donmai.us/cached/data/sample/__hinata_hanabi_tropical_kiss_drawn_by_koutaro__sample-5e8f0551f1f767c8ae9aad60d3059352.jpg",
     "https://pbs.twimg.com/media/CRSpK2hWgAAZuRc.jpg",
     "https://cdnio.luscious.net/798/lusciousnet_117_1995515551.640x0.jpg",
     "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Hentai_-_yuuree-redraw-no-halo.jpg/799px-Hentai_-_yuuree-redraw-no-halo.jpg"
     ];


const embed = new Discord.RichEmbed()
    .setImage(hentai[Math.floor(hentai.length * Math.random())])
    .setColor(0xff4d4d)
message.channel.send({embed});
}};
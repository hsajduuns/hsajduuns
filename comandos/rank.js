let reload = require('require-reload')(require),
    points = reload('../points.json');
module.exports = {
    categoria: 'Social',
    description: '\`\`\`Mostra o rank global\`\`\`',
     cooldown: 30,
    task(client, message) {
        let arr = [], fields;
        for (var id in points) {
            arr.push(points[id]);
        }
      arr.sort((a, b) => b.points - a.points);
        arr.unshift({username: 'Sua posição no rank:', level: `${message.author.username} #${arr.indexOf(points[message.author.id]) + 1}`, inline: false, points: points[message.author.id].points});
        message.channel.send({
            embed:{
                fields: arr.map(k => ({
                    name: k.username,
                    value: ' :medal: **Nível:** ' + k.level + ' | ' + ' **Total de XP:** ' + k.points,
                    inline: !!k.inline ? k.inline : false
                })).splice(0, 10),
                color: 0xeab600
            }
        });
    }
};
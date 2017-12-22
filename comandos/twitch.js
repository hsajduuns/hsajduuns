module.exports = {
    task(client, message, suffix) {

const request = require('request');
request({url: `https://api.twitch.tv/kraken/streams/${suffix}`, json: true}, (err, res, body) => {
    let {stream} = body;
    if (stream) {
        message.channel.send(`${suffix} is online, playing ${stream.game}\n${stream.channel.status}\n${stream.preview.large}`);
    } else {
        message.channel.send(`${suffix} is offline`);
    }
});
}};
module.exports = {
    description: '\`\`\`Crie um Webhook através de comando em um canal.\`\`\`',
    categoria: 'Social',
     cooldown: 10,
    task(client, message, suffix) {
      
      if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');
      
  let args = message.content.split(" ").slice(1);
  

const nameAvatar = args.join(" ");
const linkCheck = /https?:\/\/.+\.(?:png|jpg|jpeg|(url))/gi;
if (!linkCheck.test(nameAvatar)) return message.reply("Você deve inserir um link de imagem. (Formatos: PNG. JPG, JPEG.)");
const avatar = nameAvatar.match(linkCheck)[0];
const name = nameAvatar.replace(linkCheck, "");
message.channel.createWebhook(name, avatar)
  .then(webhook => webhook.edit(name, avatar)
    .catch(error => console.log(error)))
  .then(wb => message.author.send(`Aqui está seu Webhook https://canary.discordapp.com/api/webhooks/${wb.id}/${wb.token}\n\nMantenham isso seguro, assim evitará ser " explorado ".`)
    .catch(error => console.log(error)))
  .catch(error => console.log(error));
  
  message.reply('**Webhook criado, check suas mensagens diretas.**');
    }};
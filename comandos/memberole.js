  module.exports = {
    description: '\`\`\`Verifique quantos membros estão em um determinado cargo.\`\`\`',
    categoria: 'Social',
    task(client, message, suffix) {
         message.delete(1000); 
   if(!suffix) return message.channel.send('Escreva o nome do cargo/role.');
    let rol = message.guild.roles.find("name", suffix);
    if(!rol) return message.channel.send('Cargo não encontrado. Certifique de escrever o nome do cargo e não mencioná-lo.');
    let miembroroles = message.guild.roles.get(rol.id).members;
    message.channel.send(`Total de  **${miembroroles.size}** membro(s) com o cargo de **${suffix}**.`);
    
  }}
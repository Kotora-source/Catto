const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'help',
    description : 'Help the user with commands.',
    
    execute(message) {
        const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle(`Besoin d'aide ?`)
      // Set the color of the embed
      .setColor(0xff0000)
      // Set the time
      .setTimestamp()
      //Set the footer
      .setFooter(`Merci de contacter @Lousie#1515 en cas de bug ou réclamation.`)
      // Set the main content of the embed
      .setDescription(`Bonjour ${message.author.username}, voici les commandes que tu peux utiliser pour interagir avec moi :
      **!help** : obtenir de l'aide, ce que tu viens de faire :blush:
      **!cat** : je t'enverrai une photo de chat au hasard générée par une IA (thiscatdoesntexist.com)
      **!bestiole** : envoie une image d'un fabuleux animal au pif *(Contacte @Louise#1515 pour enrichir ma base de données !)*
      **!meme** : envoie un meme au hasard *(Contacte @Louise#1515 pour enrichir ma base de données !)*
      **!bass** : J'aime la basse. Tu n'aimes pas la basse ? Casse toi de ce serveur.
      Bonne continuation !`);
        // Send the embed to the same channel as the message
        message.channel.send(embed);
    }
};
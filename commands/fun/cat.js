const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "cat",
  category: "fun",
  description: "Envoie une image de chat",
  usage: "[command]",
  run: async (client, message, args) => {

        async function work() {
        let owo = (await neko.sfw.meow());

        const cat = new Discord.MessageEmbed()
        .setTitle("Random Cat Image")
        .setImage(owo.url)
        .setColor(`#000000`)
        .setURL(owo.url);
        message.channel.send(cat);

}

      work();
}
};
const Discord = require("discord.js")

module.exports = {
    name: "avatar",
    category: "utility",
    description: "Obtient l'avatar d'un utilisateur ou de vous-même",
    usage: ".avatar @user",
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(' ') || x.user.username === args[0]) || message.member;

        if (!member.user.avatarURL) return message.channel.send(`Cet utilisateur n'a pas d'avatar`);

        const avatar = new Discord.MessageEmbed()
            .setTitle(`${member.user.username} Avatar`)
            .setColor("#00FF00")
            .setImage(member.user.avatarURL())
            .setURL(member.user.avatarURL())
        message.channel.send(avatar)
            .catch(() => message.channel.send('**Erreur: ** Autorisation manquante `Embed link` '));

    }

};
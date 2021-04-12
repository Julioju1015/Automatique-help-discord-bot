module.exports = {
    name: "ping",
	aliases: ["lat"],
    category: "info",
    description: "Retourne la latence",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`🏓 Pingggggggggggg....`);

        msg.edit(`🏓 Pong!
        La latence et de ${Math.round(client.ws.ping)}ms`);
    }
}

import { MessageEmbed } from "discord.js";
import { CommandUtility } from "../../utils/command.utility";
import { Command } from "../models/command.model";

const Ping: Command = new Command({
	name: "ping",
	description: "Pings back the user with a pong!",
	aliases: ["ping", "p"],
	execute: ({ client, message }) => {
		return message?.channel.send("Pinging...").then((msg) => {
			const cmdUtility = new CommandUtility();
			const name = message.member.nickname
				? message.member.nickname
				: message.member.user.username;
			const phrase = cmdUtility.getRandomPhrases(
				name,
				cmdUtility.getRandomHonorific().name,
			);
			msg.edit({
				content: "Ping Successful",
				embeds: [
					new MessageEmbed({
						title: phrase,
						description: `It took ${client.ws.ping}ms to ping.`,
						timestamp: new Date(),
						footer: {
							text: `Bot Latency: ${
								client.ws.ping
							}ms | Execution time: ${Math.round(client.ws.ping)}ms`,
							iconURL: client.user.displayAvatarURL()
						},
					}),
				],
			});
		});
	},
});

export default Ping;

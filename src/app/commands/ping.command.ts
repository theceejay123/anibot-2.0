import { MessageEmbed } from "discord.js";
import { CommandUtility } from "../../utils/command.utility";
import { Command } from "../models/command.model";

const Ping: Command = new Command({
	name: "ping",
	description: "Pings back the user with a pong!",
	aliases: ["ping", "p"],
	execute: ({ client, message }) => {
		return message?.channel.send("Pinging...").then((msg) => {
			const cmdUtility: CommandUtility = new CommandUtility();
			const name: string = message.member.nickname
				? message.member.nickname
				: message.member.user.username;
			const phrase: string = cmdUtility.getRandomPhrases(
				name,
				cmdUtility.getRandomHonorific().name,
			);
			const executionTime: number = msg.createdTimestamp - message.createdTimestamp;
			msg.delete();
			message.channel.send({
				embeds: [
					new MessageEmbed({
						title: phrase,
						description: `It took ${executionTime}ms to ping.`,
						timestamp: new Date(),
						footer: {
							text: `Bot Latency: ${
								client.ws.ping
							}ms | Execution time: ${Math.round(executionTime)}ms`,
							iconURL: client.user.displayAvatarURL()
						},
					}),
				],
			});
		});
	},
});

export default Ping;

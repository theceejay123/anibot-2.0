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
		});
	},
});

export default Ping;

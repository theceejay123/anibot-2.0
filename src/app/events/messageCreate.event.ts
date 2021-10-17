import { Message } from "discord.js";
import { Command } from "../models/command.model";
import { Event } from "../models/event.model";

const MessageCreate: Event = new Event({
	name: "messageCreate",
	execute: async (client, message: Message) => {
		if (
			message.author.bot ||
			!message.guild ||
			!message.content ||
			!message.content.startsWith(client.config.prefix)
		)
			return;

		const [commandName, ...args] = message.content
			.slice(client.config.prefix.length)
			.trim()
			.split(/\s+/g);
		const command: Command = client.commands.find((cmd: Command) =>
			cmd.aliases.includes(commandName),
		);
    if (!command) return;
    await command.execute({
      client,
      message,
      args
    })
	},
});

export default MessageCreate;

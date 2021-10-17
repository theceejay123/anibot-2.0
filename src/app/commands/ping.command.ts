import { Command } from "../models/command.model";

const Ping: Command = new Command({
  name: "ping",
  description: "Pings back the user with a pong!",
  aliases: ["ping", "p"],
  execute: ({client, message}) => {
    return message?.channel.send(
      `:ping_pong: Pong! Current Ping: ${client?.ws.ping}ms`
    )
  }
})

export default Ping;
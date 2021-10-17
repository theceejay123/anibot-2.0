import { Event } from "../models/event.model";

const Ready: Event = new Event({
  name: "ready",
  execute: (client) => {
    console.log(`Bot successfully created! ${client.user.tag} is now online!`)
  }
})

export default Ready;
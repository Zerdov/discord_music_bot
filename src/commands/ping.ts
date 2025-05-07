import { RESTPostAPIChatInputApplicationCommandsJSONBody } from 'discord.js';

export const pingCommand: RESTPostAPIChatInputApplicationCommandsJSONBody = {
  name: 'ping',
  description: 'Replies with Pong!',
};

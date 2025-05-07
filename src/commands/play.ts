import { RESTPostAPIChatInputApplicationCommandsJSONBody } from 'discord.js';

export const playCommand: RESTPostAPIChatInputApplicationCommandsJSONBody = {
  name: 'play',
  description: 'Play a youtube video',
  options: [
    {
      name: 'url',
      description: 'URL of the video',
      type: 3,
      required: true,
    },
  ],
};

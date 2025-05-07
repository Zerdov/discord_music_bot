import { RESTPostAPIChatInputApplicationCommandsJSONBody } from 'discord.js';

export const greetCommand: RESTPostAPIChatInputApplicationCommandsJSONBody = {
  name: 'greet',
  description: 'Greet someone with a smile',
  options: [
    {
      name: 'user',
      description: 'The user you want to greet',
      type: 6,
      required: true,
    },
  ],
};

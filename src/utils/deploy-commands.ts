import { REST, RESTPostAPIChatInputApplicationCommandsJSONBody, Routes } from 'discord.js';
import { commands } from '../commands/index';
import { pipe, O } from '@mobily/ts-belt';
import { getEnv } from '../utils/env';

export const deployCommands = (
  commands: RESTPostAPIChatInputApplicationCommandsJSONBody[]
): Promise<void> =>
  pipe(
    O.flatMap(getEnv('DISCORD_TOKEN'), (token) =>
      O.flatMap(getEnv('CLIENT_ID'), (clientId) =>
        O.map(getEnv('GUILD_ID'), (guildId) => ({ token, clientId, guildId }))
      )
    ),
    O.match(
      ({ token, clientId, guildId }) =>
        new REST({ version: '10' })
          .setToken(token)
          .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
          .then(() => console.log('Commands deployed successfully.'))
          .catch((err) => console.error('Failed to deploy commands:', err)),
      () => {
        console.error('Missing required env variables (DISCORD_TOKEN, CLIENT_ID, GUILD_ID).');
        return Promise.resolve();
      }
    )
  );

deployCommands(commands);

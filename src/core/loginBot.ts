import { Client } from 'discord.js';
import { O } from '@mobily/ts-belt';
import { getEnv } from '../utils/env';

export const loginBot = async (client: Client): Promise<void> => {
  O.match(
    getEnv('DISCORD_TOKEN'),
    async (token) => {
      try {
        await client.login(token);
      } catch (error) {
        console.error('Login failed:', error);
        process.exit(1);
      }
    },
    () => {
      console.error('Missing DISCORD_TOKEN in environment variables.');
      process.exit(1);
    },
  );
};

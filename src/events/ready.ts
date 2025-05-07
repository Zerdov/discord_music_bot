import { O } from '@mobily/ts-belt';
import { Client } from 'discord.js';
import { getUserTag } from '../utils/discord';

export const handleReady = (client: Client): void => {
  O.match(
    getUserTag(client),
    (tag) => console.log(`Logged in as ${tag}!`),
    () => console.error('Client is ready but has no user'),
  );
};

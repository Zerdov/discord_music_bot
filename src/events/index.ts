import { Client, Events } from 'discord.js';
import { handleReady } from './ready';
import { handleInteraction } from './interactionCreate';

export const registerEvents = (client: Client): void => {
  client.on(Events.ClientReady, handleReady);
  client.on(Events.InteractionCreate, handleInteraction);
};

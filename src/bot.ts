import { Client, GatewayIntentBits } from 'discord.js';
import { loginBot } from './core/loginBot';
import { registerEvents } from './events';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

loginBot(client);
registerEvents(client);

// Fonctions utilitaires liées à Discord

import { Option, O } from "@mobily/ts-belt";
import { Client } from "discord.js";

export const getUserTag = (client: Client): Option<string> => O.fromNullable(client.user?.tag);

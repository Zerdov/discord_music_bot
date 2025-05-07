import { ChatInputCommandInteraction, InteractionResponse } from 'discord.js'

export function handlePing(interaction: ChatInputCommandInteraction): Promise<InteractionResponse<boolean>> {
  return interaction.reply('Pong!');
}

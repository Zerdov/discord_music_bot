import { ChatInputCommandInteraction, InteractionResponse } from 'discord.js'

export function handlePlay(interaction: ChatInputCommandInteraction): Promise<InteractionResponse<boolean>> {
  return interaction.reply('Not available yet.')
}

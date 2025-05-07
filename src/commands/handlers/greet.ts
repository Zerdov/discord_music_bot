import { pipe, O } from '@mobily/ts-belt'
import { ChatInputCommandInteraction, InteractionResponse } from 'discord.js'

export function handleGreet(interaction: ChatInputCommandInteraction): Promise<InteractionResponse<boolean>> {
  return pipe(
    O.fromNullable(interaction.options.getUser('user')),
    O.match(
      (user) => interaction.reply(`Hello, <@${user.id}>! 😊 Someone sent you a smile.`),
      () => interaction.reply('Hello there! 😊')
    )
  )
}

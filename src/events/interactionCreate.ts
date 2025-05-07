import { ChatInputCommandInteraction, Interaction, MessageFlags } from 'discord.js'
import { pipe, O, D } from '@mobily/ts-belt'
import { handlePing } from '../commands/handlers/ping'
import { handleGreet } from '../commands/handlers/greet'
import { handlePlay } from '../commands/handlers/play'

const handlers: Record<string, (interaction: ChatInputCommandInteraction) => Promise<unknown>> = {
  ping: handlePing,
  greet: handleGreet,
  play: handlePlay
}


export const handleInteraction = (interaction: Interaction): Promise<unknown> => {
  if (!interaction.isChatInputCommand()) return Promise.resolve()

  return pipe(
    O.fromNullable(D.get(handlers, interaction.commandName)),
    O.match(
      (handler) => handler(interaction),
      () => interaction.reply({ content: 'Unknown command.', flags: MessageFlags.Ephemeral })
    )
  )
}

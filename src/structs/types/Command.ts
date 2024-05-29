import { ApplicationCommandData, ButtonInteraction, Collection, CommandInteraction, CommandInteractionOptionResolver, Interaction, ModalSubmitInteraction, StringSelectMenuInteraction } from "discord.js";
import { ExtendedClient } from "index";

interface CommandProps {
    client: ExtendedClient,
    interaction: CommandInteraction,
    options: CommandInteractionOptionResolver
}

export type ComponentsButton = Collection<string, (interaction: ButtonInteraction) => any>
export type ComponentsSelect = Collection<string, (interaction: StringSelectMenuInteraction) => any>
export type ComponentsModal = Collection<string, (interaction: ModalSubmitInteraction) => any>

interface CommandsComponents {
    buttons?: ComponentsButton;
    selects?: ComponentsSelect;
    modals?: ComponentsModal;
}

export type CommandType = ApplicationCommandData & CommandsComponents & {
    run(props: CommandProps): any
}

export class Command {
    constructor(options: CommandType){
        options.dmPermission = false;
        Object.assign(this, options);
    }
}
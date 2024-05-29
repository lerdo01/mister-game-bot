import { Command } from "#base";
import { createEmbed } from "@magicyan/discord";
import { ApplicationCommandType } from "discord.js";

new Command({
    name: "maybe",
    description: "Coming soon",
    type: ApplicationCommandType.ChatInput,
    async run(interaction){

        let embedHelp = createEmbed({
            title: "Someone",
            description: "Anything",
            color: "Green"
        });

        interaction.reply({ embeds: [embedHelp] });
        
    }
});
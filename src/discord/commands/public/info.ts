import { Command } from "#base";
import { createEmbed } from "@magicyan/discord";
import { ApplicationCommandType } from "discord.js";

new Command({
    name: "seen",
    description: "anthem",
    type: ApplicationCommandType.ChatInput,
    async run(interaction){

        let embedInfo = createEmbed({
            title: "Hi",
            description: "siii",
            color: "Green"
        })

        interaction.reply({ embeds: [embedInfo]});
        
    }
});
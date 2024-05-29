import { Client, IntentsBitField, BitFieldResolvable, GatewayIntentsString, Partials, Collection } from "discord.js";
import dotenv from "dotenv";
import { CommandType, ComponentsButton, ComponentsModal, ComponentsSelect } from "./types/Command";
dotenv.config();

export class ExtendedClient extends Client {

    public commands: Collection<string, CommandType> = new Collection();
    public buttons: ComponentsButton = new Collection();
    public selets: ComponentsSelect = new Collection(); 
    public modals: ComponentsModal = new Collection();
    
    constructor(){
        super({
            intents: Object.keys(IntentsBitField.Flags) as BitFieldResolvable<GatewayIntentsString, number>,
            partials: [Partials.Channel, Partials.GuildMember, Partials.GuildScheduledEvent, Partials.Message, Partials.Reaction, Partials.User]
        })
    }
    public start(){
        this.login(process.env.BOT_TOKEN)
    }
}
import { ExtendedClient } from "./structs/ExtendedClient";

export { ExtendedClient } from "./structs/ExtendedClient";
export * from "colors";
import config from "./config.json";
import path from "path";
import fs from "fs";
import { CommandInteractionOptionResolver } from "discord.js";

const client = new ExtendedClient();

client.start();

export { client, config }

fs.readdirSync(path.join(__dirname, "commands")).forEach(local => {
    fs.readdirSync(path.join(__dirname, "commands", local))
    .filter(fileName => fileName.endsWith(".ts") || fileName.endsWith(".js"))
    .forEach(fileName => {
console.log(fileName)
    })
})
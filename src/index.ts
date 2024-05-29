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

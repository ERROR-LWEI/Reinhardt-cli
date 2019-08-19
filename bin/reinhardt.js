#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander = require("commander");
const commands_1 = require("../commands");
function main() {
    const tasks = commander;
    tasks
        .version(require('../package.json').version)
        .usage('<command> [options]');
    commands_1.CommandLoad.load(tasks);
    commander.parse(process.argv);
    if (!tasks.args.length) {
        tasks.outputHelp();
    }
}
main();

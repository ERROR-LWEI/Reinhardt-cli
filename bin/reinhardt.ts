#!/usr/bin/env node
import * as commander from 'commander';
import { CommanderStatic } from 'commander';
import { CommandLoad } from '../commands';

function main() {
    const tasks: CommanderStatic = commander;
    tasks
    .version(require('../package.json').version)
    .usage('<command> [options]');
    CommandLoad.load(tasks);
    commander.parse(process.argv);

    if (!tasks.args.length) {
        tasks.outputHelp();
    }
}

main();
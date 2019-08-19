"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const new_command_1 = require("./new.command");
const actions_1 = require("../actions");
class CommandLoad {
    static load(task) {
        new new_command_1.NewCommand(new actions_1.NewAction()).load(task);
        this.handleInvalidCommand(task);
    }
    static handleInvalidCommand(program) {
        program.on('command:*', () => {
            //   console.error(chalk.red('Invalid command: %s'), program.args.join(' '));
            //   console.log('See --help for a list of available commands.');
            process.exit(1);
        });
    }
}
exports.CommandLoad = CommandLoad;

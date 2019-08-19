import { CommanderStatic } from 'commander';
import { NewCommand } from './new.command';
import { NewAction } from '../actions';

export class CommandLoad {
    public static load(task: CommanderStatic): void {
        new NewCommand(new NewAction()).load(task);
        this.handleInvalidCommand(task);
    }

    private static handleInvalidCommand(program: CommanderStatic) {
        program.on('command:*', () => {
        //   console.error(chalk.red('Invalid command: %s'), program.args.join(' '));
        //   console.log('See --help for a list of available commands.');
          process.exit(1);
        });
    }
}
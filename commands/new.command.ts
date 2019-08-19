import { CommanderStatic, Command } from 'commander';
import { AbstractCommand } from './abstract.command';
import { Input } from './command.input';


export class NewCommand extends AbstractCommand {
    public load(task: CommanderStatic) {
        task.command('new [name]')
        .alias('n')
        .description("create new package")
        .option('-l, --language [language]', 'The language in which the code package is written')
        .option('-t, --type [type]', 'Type of code package')
        .option('-g, --skip-git', 'Skip git repository initialization')
        .option('-i, --skip-install', 'Skip dependency package initialization')
        .action(async (name: string, command: Command) => {
            const inputs: Input[] = [];
            const options: Input[] = [];

            options.push({
                name: 'language',
                value: !!command.language ? command.language : 'ts',
            });
            options.push({
                name: 'type',
                value: !!command.type ? command.type : 'basis',
            });
            options.push({
                name: 'skipGit',
                value: !!command.skipGit,
            });
            options.push({
                name: 'skipInstall',
                value: !!command.skipInstall
            });

            inputs.push({
                name: 'name',
                value: name
            })

            await this.action.handle(inputs, options);
        })
    }
}
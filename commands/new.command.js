"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_command_1 = require("./abstract.command");
class NewCommand extends abstract_command_1.AbstractCommand {
    load(task) {
        task.command('new [name]')
            .alias('n')
            .description("create new package")
            .option('-l, --language [language]', 'The language in which the code package is written')
            .option('-t, --type [type]', 'Type of code package')
            .option('-g, --skip-git', 'Skip git repository initialization')
            .option('-i, --skip-install', 'Skip dependency package initialization')
            .action((name, command) => __awaiter(this, void 0, void 0, function* () {
            const inputs = [];
            const options = [];
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
            });
            yield this.action.handle(inputs, options);
        }));
    }
}
exports.NewCommand = NewCommand;

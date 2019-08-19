import { AbstractAction } from './abstract.action';
import { Input } from '../commands';
import * as inquirer from 'inquirer';
import { quetionsSelect, quetionsInput } from '../lib/quetions/quetions';


export class NewAction extends AbstractAction {
    public async handle(inputs: Input[], options: Input[], extraFlags: string): Promise<void> {
        const name = 
    }
}

function checkInputs(inputs: Input[]) {
    const name = getApplicationName(inputs);
    const prompt: inquirer.PromptModule = inquirer.createPromptModule();
    if (!name!.value) {
        const quetions = [quetionsInput('name', 'Please enter a project name?')('MyApp')];
        const answer: inquirer.Answers = await prompt(quetions as ReadonlyArray<inquirer.Question>);
        
    }
}

function getApplicationName(inputs: Input[]) {
    return inputs.find((input) => input.name === 'name');
}

function perfectApplicationName(inputs: Input[]) {
    return inputs.forEach((input) => (input.name === 'name') && (input.value = 'MyApp'));
}

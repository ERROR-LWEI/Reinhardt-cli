import { AbstractAction } from './abstract.action';
import { Input } from '../commands';
import * as inquirer from 'inquirer';
import { quetionsSelect, quetionsInput } from '../lib/quetions/quetions';


export class NewAction extends AbstractAction {
    public async handle(inputs: Input[], options: Input[], extraFlags: string): Promise<void> {
        await checkInputs(inputs);
        console.log(inputs);
    }
}


/**
 * Check input information
 * @param inputs 
 */
async function checkInputs(inputs: Input[]) {
    const name = getApplicationName(inputs);
    const prompt: inquirer.PromptModule = inquirer.createPromptModule();
    if (!name!.value) {
        const quetions = [quetionsInput('name', 'Please enter a project name?')('MyApp')];
        const answer: inquirer.Answers = await prompt(quetions as ReadonlyArray<inquirer.Question>);
        perfectApplicationName(inputs, answer);
    }
    
}

function getApplicationName(inputs: Input[]) {
    return inputs.find((input) => input.name === 'name');
}

function perfectApplicationName(inputs: Input[], answer: inquirer.Answers) {
    inputs.forEach((input) => (input.name === 'name') && (input.value == undefined) && (input.value = answer[input.name]));
}

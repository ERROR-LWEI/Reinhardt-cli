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
const abstract_action_1 = require("./abstract.action");
const inquirer = require("inquirer");
const quetions_1 = require("../lib/quetions/quetions");
class NewAction extends abstract_action_1.AbstractAction {
    handle(inputs, options, extraFlags) {
        return __awaiter(this, void 0, void 0, function* () {
            yield checkInputs(inputs);
            console.log(inputs);
        });
    }
}
exports.NewAction = NewAction;
function checkInputs(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        const name = getApplicationName(inputs);
        const prompt = inquirer.createPromptModule();
        if (!name.value) {
            const quetions = [quetions_1.quetionsInput('name', 'Please enter a project name?')('MyApp')];
            const answer = yield prompt(quetions);
            perfectApplicationName(inputs, answer);
        }
    });
}
function getApplicationName(inputs) {
    return inputs.find((input) => input.name === 'name');
}
function perfectApplicationName(inputs, answer) {
    inputs.forEach((input) => (input.name === 'name') && (input.value == undefined) && (input.value = answer[input.name]));
}

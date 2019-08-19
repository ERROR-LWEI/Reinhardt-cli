"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function quetionsInput(name, message) {
    return (defaultAnswer) => ({
        type: 'input',
        name,
        message,
        default: defaultAnswer
    });
}
exports.quetionsInput = quetionsInput;
function quetionsSelect(name, message) {
    return (choices) => ({
        type: 'list',
        name,
        message,
        choices
    });
}
exports.quetionsSelect = quetionsSelect;

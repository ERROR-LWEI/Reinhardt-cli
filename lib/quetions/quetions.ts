export function quetionsInput(name: string, message: string) {
    return (defaultAnswer: string): any => ({
        type: 'input',
        name,
        message,
        default: defaultAnswer
    })
}

export function quetionsSelect(name: string, message: string) {
    return (choices: string[]) => ({
        type: 'list',
        name,
        message,
        choices
    })
}
export declare function quetionsInput(name: string, message: string): (defaultAnswer: string) => any;
export declare function quetionsSelect(name: string, message: string): (choices: string[]) => {
    type: string;
    name: string;
    message: string;
    choices: string[];
};

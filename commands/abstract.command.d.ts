import { CommanderStatic } from 'commander';
import { AbstractAction } from '../actions';
export declare abstract class AbstractCommand {
    protected action: AbstractAction;
    constructor(action: AbstractAction);
    abstract load(task: CommanderStatic): void;
}

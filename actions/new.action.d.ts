import { AbstractAction } from './abstract.action';
import { Input } from '../commands';
export declare class NewAction extends AbstractAction {
    handle(inputs: Input[], options: Input[], extraFlags: string): Promise<void>;
}

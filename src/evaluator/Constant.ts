import {Node} from './Node';

export class Constant extends Node {
    constructor(protected readonly value: boolean) {
        super();
    }
    evaluate () {
        return this.value;
    }

    toString(): string {
        return this.value ? 'true': 'false';
    }
}

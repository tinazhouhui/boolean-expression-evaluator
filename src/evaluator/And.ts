import {Operation} from './Operation';

export class And extends Operation {
    evaluate() {
        return this.left.evaluate() && this.right.evaluate();
    }

    toString(): string {
        return `(${this.left.toString()} and ${this.right.toString()})`;
    }
}

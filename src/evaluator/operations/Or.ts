import {Operation} from './Operation';

export class Or extends Operation {
    evaluate() {
        return this.left.evaluate() || this.right.evaluate()
    }

    toString(): string {
        return `(${this.left.toString()} or ${this.right.toString()})`;
    }
}

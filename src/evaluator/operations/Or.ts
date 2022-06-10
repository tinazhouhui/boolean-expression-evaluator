import {Operation} from './Operation';
import OrComp from '../../components/operations/OrComp';

export class Or extends Operation {
    evaluate() {
        return this.left.evaluate() || this.right.evaluate()
    }

    toString(): string {
        return `(${this.left.toString()} or ${this.right.toString()})`;
    }

    createComponent(): JSX.Element {
        return OrComp({
            left: this.left.createComponent(),
            right: this.right.createComponent()
        })
    }
}

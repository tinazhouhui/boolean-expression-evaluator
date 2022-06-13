import {Operation} from './Operation';
import ComponentFactory from '../../components/ComponentFactory';

export class And extends Operation {
  evaluate() {
    return this.left.evaluate() && this.right.evaluate();
  }

  toString(): string {
    return `(${this.left.toString()} and ${this.right.toString()})`;
  }

  createComponent(): JSX.Element {
    return ComponentFactory.createAnd(this);
  }
}

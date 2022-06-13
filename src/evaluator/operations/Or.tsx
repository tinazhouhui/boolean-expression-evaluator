import {Operation} from './Operation';
import ComponentFactory from '../../components/ComponentFactory';

export class Or extends Operation {
  evaluate() {
    return this.left.evaluate() || this.right.evaluate();
  }

  toString(): string {
    return `(${this.left.toString()} or ${this.right.toString()})`;
  }

  createComponent(): JSX.Element {
    return ComponentFactory.createOr(this);
  }
}

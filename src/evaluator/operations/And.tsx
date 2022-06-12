import {Operation} from './Operation';
import AndComp from '../../components/operations/AndComp';

export class And extends Operation {
  evaluate() {
    return this.left.evaluate() && this.right.evaluate();
  }

  toString(): string {
    return `(${this.left.toString()} and ${this.right.toString()})`;
  }

  createComponent(): JSX.Element {
    return <AndComp left={this.left.createComponent()} right={this.right.createComponent()} me={this}/>;
  }
}

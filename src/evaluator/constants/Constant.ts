import {Node} from '../Node';
import ConstantComp from '../../components/constants/ConstantComp';

export class Constant extends Node {
  constructor(protected readonly value: boolean) {
    super();
  }

  evaluate() {
    return this.value;
  }

  toString(): string {
    return this.value ? 'true' : 'false';

  }

  createComponent(): JSX.Element {
    return ConstantComp(this.value);

  }
}

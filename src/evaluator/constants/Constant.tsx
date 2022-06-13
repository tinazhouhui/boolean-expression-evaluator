import {Node} from '../Node';
import ConstantComp from '../../components/tree/constants/ConstantComp';

export class Constant extends Node {
  constructor(protected value: boolean = true) {
    super();

    this.value = value;
  }

  evaluate() {
    return this.value;
  }

  toString(): string {
    return this.value ? 'true' : 'false';

  }

  setValue(value: boolean) {
    this.value = value;
  }

  createComponent(): JSX.Element {
    return <ConstantComp me={this} />
  }
}

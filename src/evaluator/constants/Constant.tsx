import {Node} from '../Node';
import ComponentFactory from '../../components/ComponentFactory';

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
    return ComponentFactory.createConstant(this);
  }
}

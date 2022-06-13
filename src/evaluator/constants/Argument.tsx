import ArgumentSelector from '../../components/tree/constants/ArgumentSelector';
import {Node} from '../Node';
import ArgumentComp from '../../components/tree/constants/ArgumentComp';

export class Argument extends Node {
  constructor(protected value: boolean | null = null, private readonly name: string = '') {
    super();
  }

  getName() {
    return this.name;
  }

  getValue() {
    return this.value;
  }

  setValue(value: boolean) {
    this.value = value;
  }

  evaluate(): boolean {
    if (this.value === null) {
      throw new Error('Select argument, please');
    }
    return this.value;
  }

  toString(): string {
    return this.name + ': ' + String(this.evaluate());
  }

  createComponent(): JSX.Element {
    return this.value === null ? <ArgumentSelector me={this}/> : <ArgumentComp me={this}/>;
  }
}

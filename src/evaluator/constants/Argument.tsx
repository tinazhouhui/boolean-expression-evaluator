import ArgumentComp from '../../components/constants/ArgumentComp';
import {Node} from '../Node';

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
    return this.value === null ? <ArgumentComp me={this}/> : <>{this.toString()}</>;
  }
}

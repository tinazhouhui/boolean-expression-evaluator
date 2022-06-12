import {Constant} from './Constant';
import ArgumentComp from '../../components/constants/ArgumentComp';

export class Argument extends Constant {
  constructor(value: boolean = true, private readonly name: string = 'New name') {
    super(value);
  }

  getName() {
    return this.name;
  }

  toString(): string {
    return this.name + ': ' + super.toString();
  }

  createComponent(): JSX.Element {
    return ArgumentComp({name: this.name, value: super.createComponent()});
  }
}

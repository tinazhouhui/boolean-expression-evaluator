import {Constant} from './Constant';
import ArgumentComp from '../../components/constants/ArgumentComp';

export class Argument extends Constant {
  constructor(value: boolean = true, private readonly name: string = 'New name') {
    super(value);
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

  toString(): string {
    return this.name + ': ' + super.toString();
  }

  createComponent(): JSX.Element {
    return <ArgumentComp value={super.createComponent()} name={this.name}/>;
  }
}

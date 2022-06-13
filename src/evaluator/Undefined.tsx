import {Node} from './Node';
import AddNode from '../components/tree/AddNode/AddNode';

export class Undefined extends Node {
  evaluate(): boolean {
    throw new Error('please select operation');
  }

  toString(): string {
    throw new Error('please select operation');
  }

  createComponent(): JSX.Element {
    return <AddNode me={this}/>;
  }
}

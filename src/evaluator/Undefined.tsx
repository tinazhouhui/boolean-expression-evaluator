import {Node} from './Node';
import AddNode from '../components/AddNode';

export class Undefined extends Node {
  evaluate(): boolean {
    throw new Error('please select all properties');
  }

  toString(): string {
    throw new Error('please select all properties');
  }

  createComponent(): JSX.Element {
    return <AddNode me={this}/>
  }
}

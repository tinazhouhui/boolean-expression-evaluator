import {Node} from '../Node';

export abstract class Operation extends Node {
  constructor(protected readonly left: Node, protected readonly right: Node) {
    super();
  }
}

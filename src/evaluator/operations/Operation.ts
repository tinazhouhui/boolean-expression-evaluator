import {Node} from '../Node';
import {Undefined} from '../Undefined';

export abstract class Operation extends Node {
  constructor(protected left: Node = new Undefined(), protected right: Node = new Undefined()) {
    super();

    this.setLeft(left);
    this.setRight(right);
  }

  setLeft(left: Node) {
    left.setParent(this);
    this.left = left;
  }

  setRight(right: Node) {
    right.setParent(this);
    this.right = right;
  }

  getLeft(): Node {
    return this.left;
  }

  getRight(): Node {
    return this.right;
  }
}

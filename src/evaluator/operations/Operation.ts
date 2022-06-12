import {Node} from '../Node';

export abstract class Operation extends Node {
  constructor(protected left: Node, protected right: Node) {
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

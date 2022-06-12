export abstract class Node {
  protected parent?: Node;

  setParent(parent: Node) {
    this.parent = parent;
  }

  getParent() {
    return this.parent;
  }

  evaluate(): boolean {
    throw new Error('Implement me');
  }

  toString(): string {
    throw new Error('Implement me');
  }

  createComponent(): JSX.Element {
    throw new Error('Implement me');
  }
}

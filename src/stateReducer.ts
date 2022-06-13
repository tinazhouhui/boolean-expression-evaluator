import {Operation} from './evaluator/operations/Operation';
import {Node} from './evaluator/Node';
import {Undefined} from './evaluator/Undefined';

export default function (me: Node, treeState: Node, setTreeState: (treeState: {tree: Node}) => void, newNode: Node = new Undefined()) {
  const parent = me.getParent();
  // operation replacement for AND and OR
  if (parent instanceof Operation) {
    if (me === parent.getLeft()) {
      parent.setLeft(newNode);
    }

    if (me === parent.getRight()) {
      parent.setRight(newNode);
    }

    if (Object.is(parent, treeState)) {
      setTreeState({
        tree: parent
      });
      return;
    }

    // https://stackoverflow.com/questions/41474986/how-to-clone-a-javascript-es6-class-instance
    const copy = Object.assign(Object.create(Object.getPrototypeOf(treeState)), treeState);
    setTreeState({
      tree: copy
    });
  } else {
    // operation replacement for Const and Arg
    setTreeState({
      tree: newNode
    });
    return;
  }
}

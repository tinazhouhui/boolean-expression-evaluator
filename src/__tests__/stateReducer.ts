import {describe, test} from '@jest/globals';
import stateReducer, {TreeState} from '../stateReducer';
import {Node} from '../evaluator/Node';
import {Undefined} from '../evaluator/Undefined';
import {Constant} from '../evaluator/constants/Constant';
import {And} from '../evaluator/operations/And';
import {Or} from '../evaluator/operations/Or';

describe('State Reducer', () => {
  test('Should replace Const with a Undefined', () => {
    const node = new Constant();
    const treeState = {} as Node;
    const setTreeState = (state: TreeState) => {
      expect(state.tree).toBeInstanceOf(Undefined);
    };
    stateReducer(node, treeState, setTreeState);
  });

  test('Should replace And left with a Undefined', () => {
    const node = new Constant();
    const treeState = new And(node, new Undefined());
    const setTreeState = (state: TreeState) => {
      expect(state.tree).toBeInstanceOf(And);
      // @ts-ignore
      expect(state.tree?.getLeft()).toBeInstanceOf(Undefined)
    };
    stateReducer(node, treeState, setTreeState);
  });

  test('Should replace Or right with a Undefined', () => {
    const node = new Constant();
    const treeState = new Or(new Undefined(), node);
    const setTreeState = (state: TreeState) => {
      expect(state.tree).toBeInstanceOf(Or);
      // @ts-ignore
      expect(state.tree?.getRight()).toBeInstanceOf(Undefined)
    };
    stateReducer(node, treeState, setTreeState);
  });
});

import React, {Component, Context, MouseEventHandler} from 'react';
import {Or} from '../evaluator/operations/Or';
import {ITreeContext, TreeContext} from '../context';
import stateReducer from '../stateReducer';
import {And} from '../evaluator/operations/And';
import {Constant} from '../evaluator/constants/Constant';
import {Argument} from '../evaluator/constants/Argument';

type Props<T> = T & {
  me: And | Or | Constant | Argument,
}

abstract class NodeComp<TProps, TState> extends Component<Props<TProps>, TState> {
  static contextType: Context<ITreeContext> = TreeContext;

  removeHandler: MouseEventHandler<HTMLButtonElement> = () => {
    const {treeState, setTreeState} = this.context as ITreeContext;
    stateReducer(this.props.me, treeState, setTreeState);
  };

  renderRemove() {
    return <button onClick={this.removeHandler} className="btn btn-danger btn-sm">x</button>;
  }
}

export default NodeComp;

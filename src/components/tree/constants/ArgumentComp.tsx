import React, {ChangeEventHandler, Context} from 'react';
import {ITreeContext, TreeContext} from '../../../context';
import NodeComp from '../NodeComp';
import ConstSelector from '../../ConstSelector';
import {Argument} from '../../../evaluator/constants/Argument';

interface IProps {
  me: Argument,
}

class ArgumentComp extends NodeComp<IProps, {}> {
  static contextType: Context<ITreeContext> = TreeContext;

  changeHandler: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const {treeState, setTreeState} = this.context as ITreeContext;
    this.props.me.setValue(event.target.value === 'true');

    const copy = Object.assign(Object.create(Object.getPrototypeOf(treeState)), treeState);
    setTreeState(copy);
  };

  render() {
    return <span>
      {this.renderRemove()}
      {this.props.me.getName()}
      <ConstSelector defaultValue={String(this.props.me.evaluate())} changeHandler={this.changeHandler}/>
    </span>;
  }
}

export default ArgumentComp;

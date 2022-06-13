import React, {ChangeEventHandler, Context} from 'react';

import {Constant} from '../../../evaluator/constants/Constant';
import {ITreeContext, TreeContext} from '../../../context';
import NodeComp from '../NodeComp';
import ConstSelector from '../../ConstSelector';

type Props = {
  me: Constant,
}

class ConstantComp extends NodeComp<Props, {}> {
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
      <ConstSelector defaultValue={String(this.props.me.evaluate())} changeHandler={this.changeHandler}/>
    </span>;
  }
}

export default ConstantComp;

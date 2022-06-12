import React, {Component, Context, MouseEventHandler} from 'react';
import {And} from '../../evaluator/operations/And';
import {IThemeContext, ThemeContext} from '../../contextIndex';
import stateReducer from '../../stateReducer';

interface IProps {
  left: JSX.Element,
  right: JSX.Element,
  me: And
}

class AndComp extends Component<IProps, any> {
  static contextType: Context<IThemeContext> = ThemeContext;

  removeHandler: MouseEventHandler<HTMLButtonElement> = () => {
    const {treeState, setTreeState} = this.context as IThemeContext;
    stateReducer(this.props.me, treeState, setTreeState);
  };

  render() {
    const {left, right} = this.props;
    return <>
      <button onClick={this.removeHandler} className="btn btn-danger btn-sm">x</button>
      ( {left} AND {right} )
    </>;
  }
}

export default AndComp;

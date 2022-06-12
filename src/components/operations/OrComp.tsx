import React, {Component, Context, MouseEventHandler} from 'react';
import {IThemeContext, ThemeContext} from '../../contextIndex';
import stateReducer from '../../stateReducer';
import {Or} from '../../evaluator/operations/Or';

interface IProps {
  left: JSX.Element,
  right: JSX.Element,
  me: Or
}

class OrComp extends Component<IProps, any> {
  static contextType: Context<IThemeContext> = ThemeContext;

  removeHandler: MouseEventHandler<HTMLButtonElement> = () => {
    const {treeState, setTreeState} = this.context as IThemeContext;
    stateReducer(this.props.me, treeState, setTreeState);
  };

  render() {
    const {left, right} = this.props;
    return <>
      <button onClick={this.removeHandler} className="btn btn-danger btn-sm">x</button>
      ( {left} OR {right} )
    </>;
  }
}

export default OrComp;

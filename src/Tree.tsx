import React, {useContext} from 'react';
import {Node} from './evaluator/Node';
import ConstantComp from './components/constants/ConstantComp';
import {Constant} from './evaluator/constants/Constant';
import {ThemeContext} from './contextIndex';



export default class Tree extends React.Component<any, any> {
  static contextType = ThemeContext;

  evalOutput(node: Node): JSX.Element {
    try {
      return node.evaluate() ? <span className="badge text-bg-success">true</span> :
        <span className="badge text-bg-danger">false</span>;
    } catch (err: any) {
      return <span className="badge text-bg-warning">{err.message}</span>;
    }
  }

  evalString(node: Node): string {
    try {
      return node.toString();
    } catch (err: any) {
      return err.message;
    }
  }

  //console.log('rendering tree:', treeState);

  render() {
    const {treeState} = this.context as any;
    console.log({treeState});
    return <>
      <p>
        <strong>Evaluation:</strong> {this.evalOutput(treeState)}
      </p>
      <p>
        <strong>Text:</strong> {this.evalString(treeState)}
      </p>
      <p>
        <strong>React tree:</strong> {treeState.createComponent()}
        {/*<strong>React tree:</strong> <ConstantComp me={new Constant()}/>*/}
      </p>
    </>;
  }
}

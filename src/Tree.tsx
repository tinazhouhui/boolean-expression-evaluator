import React, {Component} from 'react';
import {Node} from './evaluator/Node';
import {ThemeContext} from './contextIndex';

class Tree extends Component<any, any> {
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

  render() {
    const {treeState} = this.context as any;
    return <div className="my-3">
      <h2>Evaluator</h2>
      <p>
        <strong>Evaluation:</strong> {this.evalOutput(treeState)}
      </p>
      <p>
        <strong>Text:</strong> {this.evalString(treeState)}
      </p>
      <p>
        <strong>React tree:</strong> {treeState.createComponent()}
      </p>
    </div>;
  }
}

export default Tree;

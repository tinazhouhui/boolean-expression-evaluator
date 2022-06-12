import {useContext} from 'react';
import {ThemeContext} from './context';
import {Node} from './evaluator/Node';

export function Tree() {
  const {treeState} = useContext(ThemeContext);

  function evalOutput(node: Node): JSX.Element {
    try {
      return node.evaluate() ? <span className="badge text-bg-success">true</span> : <span className="badge text-bg-danger">false</span>;
    } catch (err: any) {
      return <span className="badge text-bg-warning">{err.message}</span>;
    }
  }

  function evalString(node: Node): string {
    try {
      return node.toString();
    } catch (err: any) {
      return err.message;
    }
  }

  //console.log('rendering tree:', treeState);

  return <>
    <p>
      <strong>Evaluation:</strong> {evalOutput(treeState)}
    </p>
    <p>
      <strong>Text:</strong> {evalString(treeState)}
    </p>
    <p>
      <strong>React tree:</strong> {treeState.createComponent()}
    </p>
  </>;
}

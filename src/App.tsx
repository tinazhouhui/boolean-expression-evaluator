import React, {useState} from "react";
import {factory} from './evaluator/factory';

export default function App() {
  const initialState = {
    or: {
      left: undefined,
      right: undefined
    }
  }

  const [tree, setTree] = useState<any | undefined>(undefined);

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const delegator: { [key: string]: any } = {
      'constant': true,
      'argument': {
        value: true,
        name: 'hello'
      },
      'or': {
        or: {
          left: undefined,
          right: undefined
        }
      },
      'and': {
        and: {
          left: undefined,
          right: undefined,
        }
      }
    };

    setTree(initialState)
  }

  const node = factory(tree, handleChange);

  function evalOutput(): string {
    try {
      return node.evaluate() ? 'true' : 'false';
    } catch (err: any) {
      return err.message;
    }
  }

  function evalString(): string {
    try {
      return node.toString();
    } catch (err: any) {
      return err.message;
    }
  }

  return (
    <div>
      <p>
        expression: {evalString()}
      </p>
      <p>
        result: {evalOutput()}
      </p>
      <div>
        react tree: {node.createComponent()}
      </div>
    </div>
  );
}

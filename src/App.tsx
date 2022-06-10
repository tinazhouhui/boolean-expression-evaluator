import React, {useState} from "react";
import {factory} from './evaluator/factory';
import AddNode from './components/AddNode';

type Args = { [argname: string]: boolean };
type Operation = any; /* ...todo:
a system for defining logical operations
(not, and, or... more if you want) that can be passed:
 - selected args by name: (X and Y)
 - constant values not dependent on args: (true and X)
 - other operations: ((X and Y) or Z)
 */

function evaluateOperation(operation: Operation, args: Args): boolean {
    /* ...todo: implement an evaluator for your operations,
    given some args */
    return true
}

// function OperationBuilder(props: {
//   value: Operation;
//   onChange: (value: Operation) => void;
// }): JSX.Element {
//   /* ...todo: an ugly gui for creating operations */

// }


function OperationBuilder(operations: string[]): JSX.Element[] {
    function handleDelete() {

    }

    const constant: JSX.Element = (
        <div style={{display: 'inline'}}>
            <select name="constant" id="constant">
                <option value="true">true</option>
                <option value="false">false</option>
            </select>
            <button onClick={() => {
                handleDelete()
            }}>X
            </button>
        </div>
    )

    const argument: JSX.Element = (
        <div style={{display: 'flex'}}>
            <select name="argument" id="argument">
                <option value="true">Argument1</option>
                <option value="false">Argument2</option>
            </select>
            <button>X</button>
        </div>
    )

    const operation: JSX.Element = (
        <div style={{display: 'flex'}}>
            <select name="operation" id="operation">
                <option value="and">And</option>
                <option value="or">Or</option>
            </select>
            <button>X</button>
        </div>
    )

    const elements: { [key: string]: JSX.Element } = {constant, argument, operation}

    /* ...todo: an ugly gui for creating operations */
    const output = []
    for (const operation of operations) {
        output.push(elements[operation])
    }

    return output
}

export default function App() {
    const [operations, setOperation] = useState<string[]>([])


    function handleNew(value: string) {
        setOperation(prev => {
            return [...prev, value]
        })
    }

    const node = factory()

    function evalOutput (): string {
        try {
            return node.evaluate() ? 'true' : 'false'
        } catch (err: any) {
            return err.message
        }
    }

    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {OperationBuilder(operations)}
            </div>
            <p>
                expression: {node.toString()}
            </p>
            <p>
                result: {evalOutput()}
            </p>
            <div>
                react tree: {node.createComponent()}
            </div>

            {/* todo: use <OperationBuilder> and have an interface
      for entering arguments and seeing the result */}
        </div>
    );
}

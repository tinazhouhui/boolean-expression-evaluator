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


// function OperationBuilder(operations: string[]): JSX.Element[] {
//     /* ...todo: an ugly gui for creating operations */
// }

export default function App() {
    const node = factory()

    function evalOutput(): string {
        try {
            return node.evaluate() ? 'true' : 'false'
        } catch (err: any) {
            return err.message
        }
    }

    function evalString(): string {
        try {
            return node.toString()
        } catch (err: any) {
            return err.message
        }
    }

    function evalTree(): JSX.Element {
        try {
            return node.createComponent()
        } catch (err: any) {
            return AddNode()
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

            {/* todo: use <OperationBuilder> and have an interface
      for entering arguments and seeing the result */}
        </div>
    );
}

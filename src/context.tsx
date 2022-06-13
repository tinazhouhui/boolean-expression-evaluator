import React from 'react';
import {Node} from './evaluator/Node';
import {Argument} from './evaluator/constants/Argument';

export interface ITreeContext {
  treeState: Node;
  setTreeState: (value: { tree: Node }) => undefined | boolean | void,
  allArguments: Argument[]
}

export const TreeContext = React.createContext<ITreeContext>({} as ITreeContext);

import React from 'react';
import {Node} from './evaluator/Node';
import {Argument} from './evaluator/constants/Argument';

export interface IThemeContext {
  treeState: Node;
  setTreeState: (value: {tree:Node}) => undefined | boolean | void,
  allArguments: Argument[]
}

export const ThemeContext = React.createContext<IThemeContext>({} as IThemeContext);

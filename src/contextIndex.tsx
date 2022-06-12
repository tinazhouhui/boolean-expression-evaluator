import React from 'react';
import {Node} from './evaluator/Node';

export interface IThemeContext {
  treeState: Node;
  setTreeState: (value: any) => undefined | boolean | void,
}

export const ThemeContext = React.createContext<IThemeContext>({} as IThemeContext);

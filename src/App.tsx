import React, {useState} from "react";
import {defaultState, ThemeContext} from './context';
import {Tree} from './Tree';


export default function App() {
  const [treeState, setTreeState] = useState(defaultState.treeState);

  return (
    <ThemeContext.Provider value={{
      treeState,
      setTreeState: (value) => {
        //console.log('new state', value);
        setTreeState(value);
      }
    }}>
      <Tree/>
    </ThemeContext.Provider>
  );
}

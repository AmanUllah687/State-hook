import React, {useReducer} from 'react';
import './App.css';
import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';
import ComponentC from './Components/ComponentC';
export const CountCountext = React.createContext()

const initailState = 0
const reducer = (state, action)  => {
    switch(action) {
        case 'increment' :
        return state + 1
        case 'decrement' :
            return state - 1
            case 'reset' :
                return initailState
                default:
                    return state

    }

}


function App() {
  const [count, dispatch] = useReducer(reducer, initailState)
  return (
    <CountCountext.Provider value={{countState: count, countDispatch: dispatch}}>
    <div className="App">
      Count - {count}
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>
    </CountCountext.Provider>
  );
}
export default App;

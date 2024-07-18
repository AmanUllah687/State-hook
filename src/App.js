import React from 'react';
import './App.css';
import ComponentC from './Components/ComponentC';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"vishwas"}>
        <ChannelContext.Provider value={'codevolution'}>
      <ComponentC />
      </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
export default App;

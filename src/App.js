import './App.css';
// import { useState } from 'react';
import FruitList from './components/FruitList';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <FruitList></FruitList>
          {/* <button onClick={() => filterRedFruits()}></button>  */}
      </header>
    </div>
  );
}

export default App;

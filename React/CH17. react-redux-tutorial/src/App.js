import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

function App() {
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <div>
      <Counter number={0} />
    </div>
  );
}
};

export default App;
export default App; 
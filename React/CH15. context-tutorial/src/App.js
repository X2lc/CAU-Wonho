import React from 'react';
import ColorBox from './components/ColorBox';
import ColorContext from './contexts/color';
const App = () => {
  return (
    <div>
      <ColorBox />
    </div>
    <ColorContext.Provider value={{ color: 'red' }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
};

export default App; 

export default App;
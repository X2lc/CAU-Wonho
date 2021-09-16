import React from 'react';
import ColorBox from './components/ColorBox';
import ColorContext from './contexts/color';
import { ColorProvider } from './contexts/color';
const App = () => {
  return (
    <ColorContext.Provider>
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
    </ColorProvider>
  );
};

export default App;
import React from 'react';
import { GlobalStyle } from './GlobalStyle';

// components
import Header from './components/Header/index';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;

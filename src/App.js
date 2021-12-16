import React from 'react';
import Desktop from './components/Desktop';
import Mobile from './components/Mobile';
import Footer from './components/Footer';
import './styles/basis.css';
import './styles/mobile.css';


function App() {
  return (
    <div className="App">
      <Mobile/>
      <Desktop/>
      <Footer/>
    </div>
  );
}

export default App;

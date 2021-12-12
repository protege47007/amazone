import React from 'react';
import './styles/basis.css';
import './styles/mobile.css';
import Aside from './components/Aside';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <Aside/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;

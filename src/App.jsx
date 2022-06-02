import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/js/all.js';
import Header from './component/header/header'
import Viewer from './component/viewer/viewer';
import Footer from './component/footer/footer';
import Qr from './component/qr/qr';

function App() {
  return (
    <>
      <Header/>
      <Viewer/>
      <Qr/>
      <Footer/>
    </>
    
  );
}

export default App;

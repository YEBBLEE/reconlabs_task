import React, { useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/js/all.js';
import Header from './component/header/header'
import Viewer from './component/viewer/viewer';
import Footer from './component/footer/footer';
import Qr from './component/qr/qr';
import Modal from './component/modal/modal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(!modalOpen);
  }

  return (
    <>
      <Header/>
      <Viewer onModalClick={handleModal}/>
      <Qr/>
      <Footer/>
      {modalOpen && <Modal onModalClick={handleModal}/>}
    </>
    
  );
}

export default App;

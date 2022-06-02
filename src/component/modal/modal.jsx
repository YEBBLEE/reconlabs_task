import React from 'react';
import '../modal/modal.css';
import modalImg from '../../assets/img/modal.png';

function Modal({onModalClick}) {
  
  function handleModal() {
    onModalClick();
  }

  return (
    <div className="modal-wrapper" onClick={handleModal}>
      <img src={modalImg} alt="modal" className="modal-img"/>
    </div>
  )
}

export default Modal;
import React from 'react'
import  ReactDOM  from 'react-dom'
import ModalBg from '../StyleElements/ModalBg'



const Modal= ({children}) => {
  return ReactDOM.createPortal(
      <ModalBg>
        {children}
      </ModalBg>,
      document.getElementById('modal')
  )
}

export default Modal;
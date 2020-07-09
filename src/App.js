import React ,{ useState }from 'react';
import './App.css';
import {ResetStyle, GlobalStyle} from './components/globalStyle';
import Modal from 'react-modal';
import Calculator from './components/Calculator';

// Modal.setAppElement('#yourAppElement');

function App() {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const customStyles = {
    content : {
      top                   : '0',
      left                  : '0',
      marginRight           : '0',
      transform             : 'translate(0, 0)',
      width:'100%',
      padding:'0',
      maxWidth:'450px',
      height:'fit-content'
    }
  }
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = ( )=> {
    setIsOpen(false);
  }
  return (
    <div className="App">
      <ResetStyle />
      <GlobalStyle />
      <div className="conatiner">
        <button onClick={openModal}>Open Modal</button>
        <Modal isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}>
                <Calculator isOpen={modalIsOpen}/>
        </Modal>

      </div>

    </div>
  );
}

export default App;

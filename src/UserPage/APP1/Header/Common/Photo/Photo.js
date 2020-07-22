import React from 'react'
import img from  "./img.jpg"
import "./photo.css"
import {withRouter} from "react-router-dom"
import {useState} from 'react'
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '300px',
    height                : '150px',
    textAlign             : 'center',
    
  }

  
};

Modal.setAppElement(document.getElementById("root"))

function Photo(props){

  
     
  
      const [modalIsOpen,setIsOpen] = React.useState(false);
      function openModal() {
        setIsOpen(true);
      }
    
      
    
      function closeModal(){
        setIsOpen(false);
      }

      function logout(){

          localStorage.removeItem("userToken")
          props.history.push("/")

      }

      return(
        
        <div className="image">

            <a onClick={openModal}><img  src={img}  className="main-image-header" /></a>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
            <h4>Are you sure to Logout?</h4>
            <br></br>
            <button className="modal-button-close" onClick={closeModal}>close</button>              
            <button className="modal-button-success" onClick={logout}>Logout</button>   
                
              
            </Modal>
         

        </div>
      
      )

}

export default withRouter(Photo)
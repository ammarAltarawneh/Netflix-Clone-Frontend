import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import { useEffect, useState } from 'react';

function ModalMovie(props) {
  const posterUrl = `https://www.themoviedb.org/t/p/w220_and_h330_face`;

  const [comment, setComment] = useState("");

  const addToFav = (item) => {
    
    const serverURL = `http://localhost:3000/addMovie`;
    let obj ={... props.item, comment:comment}
    axios.post(serverURL, obj)
      .then(response => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

  }




  return (
    <>
      <Modal show={props.showFlag} onHide={props.handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{props.item.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={posterUrl + props.item.poster_path} style={{ width: '50%', height: '200px', margin: '1.5% 25% 4% 25%' }}></Image>
          <br></br>
          <p style={{ margin: '3% 0 1.5% 0', textAlign:'center', fontWeight:'lighter',fontSize:'13px'}}>Add Your Comment</p>
          <input type='text' style={{ width: '100%', margin: '0 1%', border:'none', outline:'none' }} onChange={(i) => setComment(i.target.value)}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={addToFav}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>



      
    </>
  );
}

export default ModalMovie;

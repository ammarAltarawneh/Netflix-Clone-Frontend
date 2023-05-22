import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import { useState, useEffect } from 'react';


function ModalUpdate(props) {

    // const [comment, setComment] = useState("");

    const posterUrl = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2`;


    const updateComment = async (e) => {
        e.preventDefault();

        const obj = {
            comment: e.target.comment.value
        }

        const serverURL = `${process.env.REACT_APP_serverURL}/updateMovie/${props.data.id}`;

        const result = await axios.put(serverURL, obj);
        

        props.handleClose();

        props.takeNewDataFromUpdatedModal(result.data)


    }



    return (
        <>
            <Modal show={props.updateMovie} onHide={props.handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>{props.data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={posterUrl + props.data.poster_path} style={{ width: '50%', height: '200px', margin: '1.5% 25% 4% 25%' }}></Image>
                    {props.data.overview}
                
                    <Form onSubmit={updateComment}>
                        <Form.Group >
                            <Form.Label>comment</Form.Label>
                            <Form.Control name="comment" type="text" defaultValue={props.data.comment} />
                        </Form.Group>
                        <Button variant="success" type="submit" style={{ margin: '4% 0 0 0' }}>Save changes</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={props.handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalUpdate;

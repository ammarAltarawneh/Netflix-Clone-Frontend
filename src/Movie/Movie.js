import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import ModalMovie from "../ModalMovie/ModalMovie.js";





function Movie(props) {
    const posterUrl = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2`;


    const [showFlag, setShowFlag] = useState(false);
    const [clickedMovie, setClickedMovie] = useState({});

    const handleShow = () => {
        setShowFlag(true)
        // console.log(item)
        setClickedMovie(clickedMovie)
    }

    const handleClose = () => {
        setShowFlag(false)
    }


    


    return (
        <div div style={{ width: '16rem' ,height:'800px'}}>

            <Card style={{ width: '100%',margin: '50px auto' , height: '100%' }} key={props.id} >
                <Card.Img variant="top" src={posterUrl+props.poster_path} style={{ width: '100%' ,height:'300px'}}/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        <p >{props.overview}</p>
                    </Card.Text>

                    <Button variant="dark" onClick={()=>{handleShow(props.item)}}>Add to Favorite</Button>
                </Card.Body>
            </Card>

            <ModalMovie showFlag={showFlag} handleClose={handleClose} item={props.item} />
        </div>
    );
}

export default Movie;

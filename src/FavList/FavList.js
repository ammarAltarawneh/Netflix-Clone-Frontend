import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalUpdate from '../ModalUpdate/ModalUpdate.js';




function FavList() {

    const posterUrl = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2`;

    const [favArr, setFavArr] = useState([]);
    const [updateMovie, setUpdateMovie] = useState(false);
    const [data, setData] = useState([]);
    const [newArr, setNewArr] = useState([])

    const handleClose = () => {
        setUpdateMovie(false);
    }


    const getFavMovies = () => {
        const serverURL = `${process.env.REACT_APP_serverURL}/getFavMovies`;
        fetch(serverURL)
            .then((response) => {
                response.json()
                    .then(data => {
                        setFavArr(data)
                        // console.log(data)
                    })
            })
    }


    const update = (item) => {
        setUpdateMovie(true);
        setData(item);
    }


    const deletemovie = (movieId) => {

        const serverURL = `${process.env.REACT_APP_serverURL}/deletemovie/${movieId}`;
        axios.delete(serverURL)
            .then(response => {
                getFavMovies()
                console.log(response.data)

            })
            .catch((error) => {
                console.log(error)
            })
    }

    const takeNewDataFromUpdatedModal = (arr) => {
        setNewArr(arr)
    }

    useEffect(() => {
        setNewArr(favArr)
    }, [favArr])

    useEffect(() => {
        getFavMovies()
    }, [])


    return (
        <>
            <section style={{ display: 'flex', flexDirection: 'row', margin: 'auto 200px' }}>
                <div style={{ width: '17rem' }}>

                    {newArr.map(item => {
                        return (
                            <Card style={{ width: '100%', margin: '50px auto' }} key={item.id}>
                                <Card.Img variant="top" src={posterUrl + item.poster_path} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        <p>{item.overview}</p>
                                    </Card.Text>
                                    <Card.Text>
                                        <h6 style={{ margin: '3% 0 1.5% 0', display: 'inline-block' }}>Comment:</h6>
                                        <p>{item.comment}</p>
                                    </Card.Text>
                                    <Button variant="dark" style={{ margin: '0 4% 0 0' }} onClick={() => { update(item) }}>Update comment</Button>
                                    <Button variant="danger" onClick={() => { deletemovie(item.id) }}>Delete</Button>
                                </Card.Body>
                            </Card>
                        )
                    })}


                </div>
            </section>
            <ModalUpdate updateMovie={updateMovie} handleClose={handleClose} data={data} takeNewDataFromUpdatedModal={takeNewDataFromUpdatedModal} />
        </>
    )
}

export default FavList;

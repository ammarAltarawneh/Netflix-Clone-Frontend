import axios from 'axios';
import { useEffect, useState } from 'react'
import MovieList from '../MovieList/MovieList.js';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';



function Home() {

    const [movieData, setMovieData] = useState([])

    const getTrendingMovies = () => {
        const serverURL = `http://localhost:3000/trending`;

        fetch(serverURL)
            .then(response => {
                response.json().then(data => {
                    console.log(data)
                    setMovieData(data);

                })
            })
    }


    useEffect(()=>{
        getTrendingMovies()
    },[])

    return (
        <>
        
        <MovieList dataInHome={movieData}/>
        </>
    );
}

export default Home;


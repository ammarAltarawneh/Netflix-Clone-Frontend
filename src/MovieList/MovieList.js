import Movie from "../Movie/Movie.js";
import axios from 'axios';




function MovieList(props) {
  const posterUrl = `http://image.tmdb.org/t/p/w500/`;
  return (
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap:'wrap'}}>
  {props.dataInHome.map((item) => {
              return (
                  <section style={{ margin: 'auto 5px'}} key={item.id}>
                  <Movie id={item.id} overview={item.overview} title={item.title}  poster_path={item.poster_path} item={item} />
                  </section>
              )
          })}
      </div>
  )
}
export default MovieList;
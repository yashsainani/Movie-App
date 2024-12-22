import styles from './moviesContainer.module.css';
import data from '../data';
import MovieCard from '../movieCard/movieCard';

const MoviesContainer = () => {
    return (
        <div className={styles.container}>
            <h1>NETFLIX</h1>
            <div className={styles['movies-container']}>
                {
                    data.map((ele, idx) => <MovieCard key={`${ele.title}_${idx}`} title={ele.title} poster={ele.poster} releaseYear={ele.releaseYear} genre={ele.genre} director={ele.director} imdbRating={ele.imdbRating} bgp={ele.bgp} description={ele.description} time={ele.time} />)
                }
            </div>
        </div>
    );
};

export default MoviesContainer;
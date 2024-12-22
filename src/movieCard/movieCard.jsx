import styles from './movieCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const MovieCard = ({
    title,
    poster,
    releaseYear,
    genre,
    director,
    imdbRating,
    bgp,
    description,
    time
}) => {
    const s = {
        background : `url(${bgp})`,
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover"
    }
    return (
        <div style={s} className={styles['movie-card']}>
            <div className={styles['info-div']}>
                <div className={styles['info']}>
                    <img src={poster} alt="poster" />
                    <div className={styles['about-movie']}>
                        <div className={styles['movie-info']}>
                            <p>{title}</p>
                            <span className={styles.special}>{releaseYear}, {director}</span>
                            <span>Rating : {imdbRating}</span>
                        </div>
                        <div className={styles['extra-info']}>
                            <span>{time}</span>
                            <p>{genre.join(", ")}</p>
                        </div>
                    </div>
                </div>
                <p className={styles.description}>{description}</p>
                <div className={styles.btns}>
                    <FontAwesomeIcon className={styles.btn1} icon={faShareNodes} />
                    <FontAwesomeIcon className={styles.btn2} icon={faHeart} />
                    <FontAwesomeIcon className={styles.btn3} icon={faComment} />
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
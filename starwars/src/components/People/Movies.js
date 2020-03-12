import React, { useState, useEffect } from "react";
import axios from "axios";

const Movies = (props) => {
    //console.log(props);

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .all(props.data.films.map((movieUrl) => axios.get(movieUrl))) //in people.js, person object is pass through a parameter data,
            .then((response) => {
                //console.log(response);
                setMovies(response);
            })
            .catch((err) => console.log(err));
    }, [props.data.films]);

    return (
        <div>
            {movies.map((film) => {
                // console.log('filmsarray map', film)
                return <li key={film.data.title}>{film.data.title}</li>;
            })}
        </div>
    );
};
export default Movies;

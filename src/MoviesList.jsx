import React, { useState } from "react";

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { title: "Fried Green Tomatoes", details: 'Details about Fried Green Tomatoes'},
        { title: "Apollo 13", details: 'Details about Apollo 13'},
        { title: "Groundhog Day", details: 'Details about Groundhog Day' }
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleClick = (movie) => {
        setSelectedMovie(selectedMovie === movie ? null : movie);
    };

    const removeMovie = (movieIndex) => {
        const updatedMovies = movies.filter((_, index) => index !== movieIndex); 
        setMovies(updatedMovies);
    }

    return (
        <div>
            <ul>
                {movies.map((movie, index) => (
                    <div key={index}>
                        <li onClick={() => handleClick(movie)}>
                            {movie.title}
                            {selectedMovie === movie && <p>{movie.details}</p>}
                        </li>,
                        <button onClick={() => removeMovie(index)}>Remove</button>
                    </div>
                ))}
            </ul>
        </div>
    ); 
    

};


export default MoviesList;
import React, { useState } from "react"

const MoviesList = () => {
    const [movies, setMovie] = useState(["Fried Green Tomatoes", "Apollo 13", "Groundhog Day"])

return (
    <div>
        <ul>
            {movies.map((movie, index) => (
                <li key={index}>{movie}</li>
            ))}
        </ul>
    </div>
)
}

export default MoviesList;
import { useState, useEffect } from "react";
import API from "../API";

export const useMovieFetch = movieId => {
    const [state, setState] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                setError(false)

                const movie = await API.fetchMovie(movieId)
                const credit = await API.fetchCredits(movieId)

                // Get directors only
                const directors = credit.crew.filter(
                    member => member.job === 'Director'
                )

            
                setState({
                    ...movie,
                    actors: credit.cast,
                    directors
                })

                setLoading(false)

            } catch (error) {
                setError(true)
            }
        }

        fetchData()
    }, [movieId])

    return {state, loading, error}
}


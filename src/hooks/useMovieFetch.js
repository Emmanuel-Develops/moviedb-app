import { useState, useEffect } from "react";
import API from "../API";
import { isPersistedState } from "../helpers";

export const useMovieFetch = movieId => {
    const [state, setState] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchData = async (movieId) => {
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
            
            sessionStorage.setItem(movieId, JSON.stringify({
                ...movie,
                actors: credit.cast,
                directors
            }))

            setLoading(false)

        } catch (error) {
            setError(true)
        }
    }

    useEffect(() => {
        
        const sessionData = isPersistedState(movieId)

        if (sessionData) {
            setState(sessionData)
            setLoading(false)
            return
        }

        fetchData(movieId)
    }, [movieId])

    return {state, loading, error}
}


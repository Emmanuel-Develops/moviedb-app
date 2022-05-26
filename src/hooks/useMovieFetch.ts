import { useState, useEffect } from "react";
import API, {Movie, Cast, Crew, Credits} from "../API";
import { isPersistedState } from "../helpers";

// Types
// export type MovieState = Movie & { actors: Cast[], directors: Crew[]}

export type MovieState = Movie & {
    actors: Cast[];
    directors: Crew[];
}

export const useMovieFetch = (movieId: number) => {
    const [state, setState] = useState<MovieState>({} as MovieState)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchData = async (movieId: number) => {
        try {
            setLoading(true)
            setError(false)

            const movie: Movie = await API.fetchMovie(movieId)
            const credit: Credits | any = await API.fetchCredits(movieId)

            const actors: Cast[] = credit.cast

            // Get directors only
            const directors: Crew[] = credit.crew.filter(
                (member: Crew) => (member.job === 'Director')
            )
        
            setState({
                ...movie,
                actors,
                directors
            })
            
            sessionStorage.setItem(movieId.toString(), JSON.stringify({
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
        
        const sessionData = isPersistedState(movieId.toString())

        if (sessionData) {
            setState(sessionData)
            setLoading(false)
            return
        }

        fetchData(movieId)
    }, [movieId])

    return {state, loading, error}
}


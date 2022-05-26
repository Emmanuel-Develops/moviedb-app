import { useState, useEffect } from 'react'
import API, { Movie, Movies } from '../API'
import { isPersistedState } from '../helpers'

const initialState = {
    page: 1,
    results: [] as Movie[],
    total_pages: 0,
    total_results: 0
}

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [loadNextPage, setLoadNextPage] = useState(false)


    const fetchMovies = async (page: number, searchTerm: string = "") => {
        try {
            setError(false);
            setLoading(true);
            const movies = await API.fetchMovies(page, searchTerm);
            // 

            setState(prev => ({
                ...movies,
                results: 
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))
        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }

    // It'll run only on the initial render of this Home component and searchTerm
    useEffect(() => {
        if (!searchTerm) {
            const sessionState: Movies | undefined = isPersistedState('homeState')
            if (sessionState) {
                setState(sessionState)
                return
            }
        }
        setState(initialState)
        fetchMovies(1, searchTerm)
    }, [searchTerm])

    useEffect(() => {
        if (!loadNextPage) return
        fetchMovies(state.page+1, searchTerm)
        setLoadNextPage(false)
    }, [loadNextPage, searchTerm, state.page])

    useEffect(() => {
       if (!searchTerm) {
           sessionStorage.setItem('homeState', JSON.stringify(state))
       } 
    }, [searchTerm, state])

    return { state, loading, error, searchTerm, setSearchTerm, loadNextPage, setLoadNextPage }
}

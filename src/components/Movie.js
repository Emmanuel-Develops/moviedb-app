import React from 'react'
import { useParams } from 'react-router'
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'
// Components
import Grid from './Grid'
import Spinner from './Spinner'
import BreadCrumb from './BreadCrumb'
import MovieInfo from './MovieInfo'
// Hook
import { useMovieFetch } from '../hooks/useMovieFetch'
// Image
import NoImage from '../images/no_image.jpg'

const Movie = () => {
    const { movieId } = useParams()

    const { state: movie, loading, error } = useMovieFetch(movieId)
    // from above state is renamed to movie while destructuring

    console.log(movie)

    if (loading) return <Spinner />

    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />  
        </>
    )
}

export default Movie
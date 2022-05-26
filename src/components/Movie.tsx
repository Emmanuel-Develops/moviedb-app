import React from 'react'
import { useParams } from 'react-router'
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'
// Components
import Grid from './Grid'
import Spinner from './Spinner'
import BreadCrumb from './BreadCrumb'
import MovieInfo from './MovieInfo'
import MovieInfoBar from './MovieInfoBar'
import Actor from './Actor'
// Hook
import { useMovieFetch } from '../hooks/useMovieFetch'
// Image
import NoImage from '../images/no_image.jpg'

const Movie: React.FC = () => {
    const { movieId } = useParams()

    const { state, loading, error } = useMovieFetch(Number(movieId))
    // from above state is renamed to movie while destructuring

    if (loading) return <Spinner />

    if (error) return <div>Something went wrong...</div>

    return (
        <>
            <BreadCrumb movieTitle={state.original_title} />
            <MovieInfo movie={state} />  
            <MovieInfoBar time = {state.runtime} budget={state.budget} revenue = {state.revenue} />
            {/* <Actor actors={movie.actors}/> */}
            {state.actors && <Grid header='Actors'>
                {state?.actors?.map(actor => (
                    <Actor 
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path 
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                                : NoImage
                        }
                    />
                ))}
            </Grid>}
        </>
    )
}

export default Movie
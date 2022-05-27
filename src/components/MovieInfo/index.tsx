import React, {useContext} from 'react'

import { Wrapper, Content, Text } from './MovieInfo.styles'

import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../../config'

import API from 'API'

import NoImage from '../../images/no_image.jpg'
// Components
import Thumb from '../Thumb'
import Rate from 'components/Rate'

// Types
import { MovieState} from 'hooks/useMovieFetch'
// Context
import {Context} from "context"
import { useNavigate } from 'react-router-dom'

type Props = {
    movie: MovieState;
}

const MovieInfo: React.FC<Props> = ({ movie }) => {

    const {user} = useContext(Context)
    const navigate = useNavigate()

    const handleRating = async(value: number) => {

        try {
            const data = await API.rateMovie(user.sessionId, movie.id, value);
            if (data.response.status === 401) {
                navigate('../../login', {replace: true});
                return
            }
            alert('Rating Successful')

        } catch (error) {
            console.log(error)
        }
    } 
    
    return (
        <Wrapper backdrop={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`}>
            <Content>
                <Thumb 
                    image = {movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage}
                    clickable = {false}
                />
                <Text>
                    <h1>{movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>
                    <div className="rating-directors">
                        <div>
                            <h3>RATING</h3>
                            <div className="score">{movie.vote_average}</div>
                        </div>
                        <div className="director">
                            <h3>DIRECTOR{(movie?.directors && movie?.directors.length > 1 ) ? 'S' : ''}</h3>
                            {movie?.directors?.map((director) => {
                                return <p key={director.credit_id}>{director.name}</p>
                            })}

                        </div>
                    </div>
                    <Rate handleRating={handleRating} />
                </Text>
            </Content>
        </Wrapper>
    )

}

export default MovieInfo

import React from 'react'

import { Wrapper, Content, Text } from './MovieInfo.styles'

import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../../config'

import NoImage from '../../images/no_image.jpg'
// Components
import Thumb from '../Thumb'

const MovieInfo = ({ movie }) => {
    
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
                                return <p key={director.id}>{director.name}</p>
                            })}

                        </div>
                    </div>
                </Text>
            </Content>
        </Wrapper>
    )

}

export default MovieInfo

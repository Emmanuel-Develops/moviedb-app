import React from 'react'
// import PropTypes from 'prop-types';

// Styles
import { Wrapper, Image } from './Actor.styles'

export type Props = {
    name: string;
    character: string;
    imageUrl: string;
}


const Actor: React.FC<Props> = ({ name, character, imageUrl }) => {
    return (
        <Wrapper>
            <Image src={imageUrl} alt="actor-thumb" />
            <h3>{name}</h3>
            <p>{character}</p>
        </Wrapper>
    )

}
// Actor.propTypes = {
//     name: PropTypes.string,
//     character: PropTypes.string,
//     imageUrl: PropTypes.string,
// }

export default Actor

import styled from "styled-components";

export const Wrapper = styled.div`
    background: ${({ backdrop }) => 
        backdrop ? `url(${ backdrop })` : 'var(--darkGrey)'
    };
    background-size: cover;
    background-position: center;
    padding: 40px 20px;
    animation: animateMovieInfo 1s;

    @keyframes animateMovieInfo {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    max-width: var(--maxWidth);
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 20px;

    @media screen and (max-width: 768px) {
        display: block;
        max-height: none;
    }
`;

export const Text = styled.div`
    width: 100%;
    padding: 20px 40px;
    color: var(--white);
    /* overflow: hidden; */
    /* flex-basis: 90%; */
    .rating-directors {
        display: flex;
        /* justify-content: flex-start; */
    }
    .score {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        margin: 0 auto;
        background: #fff;
        color: #000;
        font-weight: 800;
        border-radius: 50%;
    }
    .director {
        display: flex;
        flex-direction: column;
        margin: 0 0 0 40px;
        p {
            flex: 1 0 auto;
            margin: 0;
            display: flex;
            align-items: center;
        }
    }

    h1 {
            @media screen and (max-width: 768px) {
                font-size: var(--fontBig)
            }
        }
    /* @media screen and (max-width: 768px) {
        padding: 20px;
    } */
`;
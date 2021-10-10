import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: var(--darkGrey);
`;

export const Content = styled.div`
    position: relative;
    padding-left: 200px;
    max-width: var(--maxWidth);
    width: 100%;
    height: 55px;
    border-radius: 40px;
    background: var(--medGrey);
    color: var(--white);
    /* outline: 2px solid blue; */

    img {
        position: absolute;
        left: 15px;
        width: 30px;
        top: 50%;
        transform: translateY(-50%);
    }

    input {
        font-size: var(--fontBig);
        font-weight: 600;
        position: absolute;
        padding: 0 0 0 60px;
        border: 0;
        width: 95%;
        background: transparent;
        color: var(--white);
        left: 0;
        height: 40px;
        top: 50%;
        transform: translateY(-50%);
        /* outline: 2px solid red; */


        :focus {
            outline: none;
        }
    }
`; 



import styled from "styled-components";

export const Wrapper = styled.button`
    display: block;
    padding: 10px 0;
    width: 20%;
    min-width: 200px;
    background: var(--darkGrey);
    color: var(--white);
    font-size: var(--fontBig);
    margin: 20px auto;
    border: 0;
    border-radius: 1.2em;
    transition: all 0.3s;
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;



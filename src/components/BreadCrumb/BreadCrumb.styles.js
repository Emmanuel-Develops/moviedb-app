import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    background: var(--medGrey);
    padding: 23px 20px;
`;

export const Content = styled.div`
    width: 100%;
    max-width: var(--maxWidth);
    margin: 0 auto;

    span {
        font-size: var(--fontMed);
        color: var(--white);
        padding-right: 10px;

        @media screen and (max-width: 768px) {
            font-size: var(--fontSmall);
        }
    }
`;


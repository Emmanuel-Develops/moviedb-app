import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    padding: 20px;
    background: var(--darkGrey);
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: var(--maxWidth);
    margin: 0 auto;
    gap: 30px;
    justify-content: space-between;
    
    .column {
        flex: 1 0 187px;
        padding: 0 20px;
        background: var(--medGrey);
        border-radius: 20px;
        text-align: center;
    }
`;


import React from "react";
// Styles
import { Wrapper, Content } from "./Grid.styles";

const Grid = ({ header, children }) => (
    <Wrapper>
        {header? <h1>{header}</h1> : null }
        <Content>{children}</Content>
    </Wrapper>
)

export default Grid

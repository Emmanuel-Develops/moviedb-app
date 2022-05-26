import React from "react";
// Styles
import { Wrapper, Content } from "./Grid.styles";

type Props = {
    header: string;
    children?: React.ReactNode;
}

const Grid: React.FC<Props> = ({ header, children }) => (
    <Wrapper>
        {header? <h1>{header}</h1> : null }
        <Content>{children}</Content>
    </Wrapper>
)

export default Grid

import React from "react";

import { Wrapper } from "./Button.styles";

type Props = {
    text: string;
    callback: (value: boolean) => void;
}

const Button: React.FC<Props> = ({ text, callback }) => {
    return (
        <Wrapper type="button" onClick={() => callback(true)}>
            {text}
        </Wrapper>
    )
}

export default Button;
 
import React from "react";

import { Wrapper } from "./Button.styles";

const Button = ({ text, callback }) => {
    return (
        <Wrapper type="button" onClick={() => callback(true)}>
            {text}
        </Wrapper>
    )
}

export default Button;
 
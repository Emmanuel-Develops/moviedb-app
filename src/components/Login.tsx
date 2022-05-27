import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from 'API'

// Components
import Button from "components/Button";
// Styles
import { Wrapper } from "components/Login.styles"
// Context
import { Context } from "context";

type LoginDetails = {
    username: string;
    password: string;
}

const Login: React.FC = () => {

    const initialState = {
        username: '',
        password: ''
    }
    const [state, setState] = useState<LoginDetails>(initialState)
    const [error, setError] = useState(false)


    const navigate = useNavigate()

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const name = e.target.name
        const value = e.target.value
        setState(prev => ({...prev, [name]: value}))

        if (error) setError(false)
    } 

    const {handleLogin} = useContext(Context)

    const handleSubmit = async() => {
        setError(false);
        const {username, password} = state
        try {
            const requestToken = await API.getRequestToken()
            const sessionId = await API.authenticate(requestToken, username, password)

            handleLogin({ sessionId: sessionId.session_id, username })
            
            navigate('/')

        } catch (error) {
            setError(true)
        }
    }

    return (
        <Wrapper>
            {error && <div className="error">There was an error</div> }
            <label>Username:</label>
            <input 
                type= "text"
                value= {state.username}
                name= "username"
                onChange={handleInput}
            />
            <input 
                type= "password"
                value= {state.password}
                name= "password"
                onChange={handleInput}
            />
            <Button text="Login" callback={handleSubmit} />
        </Wrapper>

    )
}
 

export default Login

import React, { useState, useEffect, useRef } from 'react'
// Image
import searchIcon from '../../images/search-icon.svg'
// Styles
import { Wrapper, Content} from './SearchBar.styles'
// Types
type Props = {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ setSearchTerm }: Props) => {
    const [state, setState] = useState("")
    // the useRef set to true means it's value is set to true initially when the component mounts
    // i.e (first run). We don't want the useEffect to run on initial component mount so we return nothing if true and set initial to false
    // changing a useRef variabl doesn't trigger a re-render
    const initial = useRef(true)

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)

        return () => clearTimeout(timer)
    }, [setSearchTerm, state])

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon" />
                <input 
                    type="text" 
                    placeholder="Search Movie" 
                    onChange={(e) => setState(e.target.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    )
}

export default SearchBar

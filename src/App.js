import React from 'react';

import { GlobalStyle } from './GlobalStyle';

//Components
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
    return (
        <div>
            <Header/>
            <Home />
            <GlobalStyle />
        </div>
    )
}

export default App;

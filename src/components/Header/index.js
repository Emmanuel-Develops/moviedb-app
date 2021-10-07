import React from "react";
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

const Header = () => (
        <Wrapper>
            <Content>
                <LogoImg src={RMDBLogo} alt='app logo'/>
                <TMDBLogoImg src={TMDBLogo} alt='tmdb logo'/>
            </Content>
        </Wrapper>
)

export default Header;

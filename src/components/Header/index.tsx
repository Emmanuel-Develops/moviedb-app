import React from "react";
import { Link } from "react-router-dom";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

const Header: React.FC = () => (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={RMDBLogo} alt='app logo'/>
                </Link>
                <TMDBLogoImg src={TMDBLogo} alt='tmdb logo'/>
            </Content>
        </Wrapper>
)

export default Header;
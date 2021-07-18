import React from 'react';
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.Styles';
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

const Header = () => (
  <Wrapper>
    <Content>
      <LogoImg src={RMDBLogo} alt='rmdb-logo' />
      <TMDBLogoImg src={TMDBLogo} alt='tmdb_logo' />
    </Content>
  </Wrapper>
);

export default Header;

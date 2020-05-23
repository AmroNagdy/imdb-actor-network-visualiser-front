import React from 'react';
import GitHubLogo from './GitHubLogo.svg';
import FooterLogo from '../styles/FooterLogo';

export default function Footer() {

  return (
    <a href='https://github.com/AmroNagdy/imdb-actor-network-visualiser-front'>
      <FooterLogo
        src={GitHubLogo}
        alt='GitHubLogo'
      />
    </a>
  );

};
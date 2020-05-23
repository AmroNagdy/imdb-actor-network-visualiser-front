import React from 'react';
import GitHubLogo from './GitHubLogo.svg';
import GitHubLogoStyle from '../styles/GitHubLogoStyle';

export default function Footer() {

  return (
    <a href='https://github.com/AmroNagdy/imdb-actor-network-visualiser-front'>
      <GitHubLogoStyle
        src={GitHubLogo}
        alt='GitHubLogo'
      />
    </a>
  );

};
import React from 'react';
import GitHubLogo from './GitHubLogo.svg';
import GitHubLogoStyle from '../styles/GitHubLogoStyle';
import StyledInstructions from '../styles/StyledInstructions';

export default function Footer() {



  return (
    <>
      <StyledInstructions>
        <b>Instructions</b><br />
        1. Lookup an actor by name.<br />
        2. Select the actor that you want.<br />
        3. Mouse-over or tap a node in the network to see what films a connected actor has featured in.<br />
      </StyledInstructions>
      <a href='https://github.com/AmroNagdy/imdb-actor-network-visualiser-front'>
        <GitHubLogoStyle
          src={GitHubLogo}
          alt='GitHubLogo'
        />
      </a>
    </>
  );

};
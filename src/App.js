import React from 'react';
import Header from './components/header/Header';
import ActorSearchBox from './components/search/ActorSearchBox';
import ActorSearchResultsList from './components/search/ActorSearchResultsList';
import Network from './components/network/Network';
import { BLACK, WHITE } from './constants/AppColours';
import NetworkNameToggle from './components/network/NetworkNameToggle';

const style = {
  backgroundColor: BLACK,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: WHITE,
}

export default function App() {

  return (
    <div className="App" style={style}>
      <Header />
      <ActorSearchBox />
      <ActorSearchResultsList />
      <Network />
      <NetworkNameToggle />
    </div>
  );

};
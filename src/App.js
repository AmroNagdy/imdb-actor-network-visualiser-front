import React from 'react';
import Header from './components/header/Header';
import ActorSearchBox from './components/search/ActorSearchBox';
import ActorSearchResultsList from './components/search/ActorSearchResultsList';
import Network from './components/network/Network';

const style = {
  backgroundColor: '#070C09',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white'
};

export default function App() {

  return (
    <div className="App" style={style}>
      <Header />
      <ActorSearchBox />
      <ActorSearchResultsList />
      <Network />
    </div>
  );

};
import React from 'react';
import './App.css';
import ActorSearchBox from './components/search/ActorSearchBox';
import ActorSearchResultsList from './components/search/ActorSearchResultsList';
import Network from './components/network/Network';

export default function App() {

  return (
    <div className="App">
      <ActorSearchBox />
      <ActorSearchResultsList />
      <Network />
    </div>
  );

};
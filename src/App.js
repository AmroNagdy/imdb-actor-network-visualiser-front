import React from 'react';
import './App.css';
import SearchBox from './components/search/SearchBox';
import SearchResultList from './components/search/SearchResultList';
import Network from './components/network/Network';

export default function App() {

  return (
    <div className="App">
      <SearchBox />
      <SearchResultList />
      <Network />
    </div>
  );

};
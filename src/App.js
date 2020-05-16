import React from 'react';
import './App.css';
import SearchBox from './components/search/SearchBox'
import SearchResultList from './components/search/SearchResultList';

export default function App() {

  return (
    <div className="App">
      <SearchBox />
      <SearchResultList />
    </div>
  );

}
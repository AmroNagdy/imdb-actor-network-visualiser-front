import React from 'react';
import Header from './components/header/Header';
import SearchBox from './components/search/SearchBox';
import SearchResultList from './components/search/SearchResultList';
import Network from './components/network/Network';
import { BLACK, WHITE } from './constants/AppColours';
import NetworkNameToggle from './components/network/NetworkNameToggle';
import Footer from './components/footer/Footer';

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
      <SearchBox />
      <SearchResultList />
      <Network />
      <NetworkNameToggle />
      <Footer />
    </div>
  );

};
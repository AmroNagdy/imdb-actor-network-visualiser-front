import React from 'react';
import Header from './components/header/Header';
import SearchBox from './components/search/SearchBox';
import SearchResultList from './components/search/SearchResultList';
import Network from './components/network/Network';
import NetworkNameToggle from './components/network/NetworkNameToggle';
import Footer from './components/footer/Footer';
import AppStyle from './components/styles/AppStyle';

export default function App() {

  return (
    <AppStyle>
      <Header />
      <SearchBox />
      <SearchResultList />
      <Network />
      <NetworkNameToggle />
      <Footer />
    </AppStyle>
  );

};
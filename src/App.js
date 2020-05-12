import React, { Component } from 'react';
import './App.css';
import SearchBoxContainer from './components/search/SearchBoxContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <SearchBoxContainer />
      </div>
    );
  }
}

export default App;

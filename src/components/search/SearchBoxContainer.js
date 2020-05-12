import React, { Component } from 'react'
import SearchResultList from './SearchResultList'
import SearchBox from './SearchBox'

export class SearchBoxContainer extends Component {

  state = {
    searchResults: [
      {
        id: 1,
        name: 'Name 1'
      },
      {
        id: 2,
        name: 'Name 2'
      }
    ]
  }

  render() {
    return [
      <SearchBox />,
      <SearchResultList searchResults={this.state.searchResults} />
    ]
  }

}

export default SearchBoxContainer
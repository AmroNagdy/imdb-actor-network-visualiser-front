import React from 'react';
import { useSelector } from 'react-redux';
import SearchResult from './SearchResult'

export default function SearchResultList() {

  const searchResultList = useSelector(state => state.searchResultList);

  return (
    searchResultList.map(searchResult =>
      <SearchResult entry={searchResult} />
    )
  );

}
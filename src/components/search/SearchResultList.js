import React from 'react';
import { connect } from 'react-redux';
import SearchResultListItem from './SearchResultListItem';

function SearchResultList(props) {

  return (
    <ul>
      {props.searchResults.map(searchResult => <SearchResultListItem key={searchResult.id} props={searchResult} />)}
    </ul>
  );

};

const mapStateToProps = state => {
  return {
    searchResults: state.searchResultList.searchResults
  };
};

export default connect(mapStateToProps)(SearchResultList);
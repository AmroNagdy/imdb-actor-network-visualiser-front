import React from 'react';
import { connect } from 'react-redux';
import SearchResultListItem from './SearchResultListItem';
import SearchResultListStyle from '../styles/SearchResultListStyle';

function SearchResultList(props) {

  return (
    <SearchResultListStyle>
      {props.searchResults.map(actorDetails => <SearchResultListItem key={actorDetails.nconst} actorDetails={actorDetails} />)}
    </SearchResultListStyle>
  );

};

const mapStateToProps = state => ({
  searchResults: state.searchResult.searchResults
});

export default connect(mapStateToProps)(SearchResultList);
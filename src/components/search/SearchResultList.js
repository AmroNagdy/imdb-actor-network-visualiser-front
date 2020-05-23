import React from 'react';
import { connect } from 'react-redux';
import SearchResultListItem from './SearchResultListItem';
import SearchResultListStyle from '../styles/SearchResultListStyle';

function SearchResultList(props) {

  return (
    <div>
      {props.queriedOnce && !props.loading && props.searchResults.length === 0 ?
        <h1>No actors found!</h1> :
        <SearchResultListStyle>
          {props.searchResults.map(actorDetails => <SearchResultListItem key={actorDetails.nconst} actorDetails={actorDetails} />)}
        </SearchResultListStyle>}
    </div>

  );

};

const mapStateToProps = state => ({
  searchResults: state.searchResult.searchResults,
  loading: state.searchResult.loading,
  queriedOnce: state.searchResult.queriedOnce
});

export default connect(mapStateToProps)(SearchResultList);
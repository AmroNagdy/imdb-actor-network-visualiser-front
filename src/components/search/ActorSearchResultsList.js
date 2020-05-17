import React from 'react';
import { connect } from 'react-redux';
import ActorSearchResultListItem from './ActorSearchResultsListItem';

function SearchResultList(props) {

  return (
    <ul>
      {props.searchResults.map(actorDetails => <ActorSearchResultListItem key={actorDetails.nconst} props={actorDetails} />)}
    </ul>
  );

};

const mapStateToProps = state => ({
  searchResults: state.actorSearchResults.searchResults
});

export default connect(mapStateToProps)(SearchResultList);
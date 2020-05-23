import React from 'react';
import { connect } from 'react-redux';
import ActorSearchResultListItem from './SearchResultListItem';

const style = {
  marginLeft: '30px',
  marginRight: '30px',
  maxWidth: '60vw',
  textAlign: 'center'
};

function SearchResultList(props) {

  return (
    <ul style={style}>
      {props.searchResults.map(actorDetails => <ActorSearchResultListItem key={actorDetails.nconst} actorDetails={actorDetails} />)}
    </ul>
  );

};

const mapStateToProps = state => ({
  searchResults: state.searchResult.searchResults
});

export default connect(mapStateToProps)(SearchResultList);
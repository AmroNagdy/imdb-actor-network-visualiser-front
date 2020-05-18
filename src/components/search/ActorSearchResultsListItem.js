import React from 'react';
import { connect } from 'react-redux';
import actorNetworkRequest from '../../actions/network/actorNetworkRequest';

function ActorSearchResultsListItem(props) {

  const handleClick = () => {
    props.networkRequest(props.actorDetails.nconst);
  };

  return (
    <button onClick={handleClick}>
      {props.actorDetails.primaryName}
    </button>
  );

};

const mapDispatchToProps = dispatch => ({
  networkRequest: nconst => dispatch(actorNetworkRequest(nconst))
});

export default connect(null, mapDispatchToProps)(ActorSearchResultsListItem);
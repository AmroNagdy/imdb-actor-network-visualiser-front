import React from 'react';
import { connect } from 'react-redux';
import { actorNetworkRequest } from '../../actions/network/actorNetwork';
import Button from '../styles/Button';

function ActorSearchResultsListItem(props) {

  const handleClick = () => {
    props.networkRequest(props.actorDetails.nconst);
  };

  return (
    <Button onClick={handleClick}>
      {props.actorDetails.primaryName}
    </Button>
  );

};

const mapDispatchToProps = dispatch => ({
  networkRequest: nconst => dispatch(actorNetworkRequest(nconst))
});

export default connect(null, mapDispatchToProps)(ActorSearchResultsListItem);
import React from 'react';
import { connect } from 'react-redux';
import { actorNetworkRequest } from '../../actions/network/actorNetwork';
import { LIGHT_GRAY, DARK_GRAY } from '../../constants/AppColours';

const style = {
  backgroundColor: LIGHT_GRAY,
  border: 'none',
  color: DARK_GRAY,
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  fontSize: '16px',
  marginLeft: '5px',
  marginRight: '5px',
  marginBottom: '5px',
  marginTop: '5px'
};

function ActorSearchResultsListItem(props) {

  const handleClick = () => {
    props.networkRequest(props.actorDetails.nconst);
  };

  return (
    <button style={style} onClick={handleClick}>
      {props.actorDetails.primaryName}
    </button>
  );

};

const mapDispatchToProps = dispatch => ({
  networkRequest: nconst => dispatch(actorNetworkRequest(nconst))
});

export default connect(null, mapDispatchToProps)(ActorSearchResultsListItem);
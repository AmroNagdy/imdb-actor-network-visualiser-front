import React from 'react';
import { connect } from 'react-redux';
import { actorNetworkRequest } from '../../actions/network';
import ButtonStyle from '../styles/ButtonStyle';

function SearchResultListItem(props) {

  const handleClick = () => {
    props.networkRequest(props.actorDetails.nconst);
  };

  return (
    <ButtonStyle onClick={handleClick}>
      {props.actorDetails.primaryName}
    </ButtonStyle>
  );

};

const mapDispatchToProps = dispatch => ({
  networkRequest: nconst => dispatch(actorNetworkRequest(nconst))
});

export default connect(null, mapDispatchToProps)(SearchResultListItem);
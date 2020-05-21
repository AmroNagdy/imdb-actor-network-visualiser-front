import React from 'react';
import { connect } from 'react-redux';
import { actorNetworkDisplayNamesToggle } from '../../actions/network/actorNetwork';
import Button from '../styles/Button';

function NameToggle(props) {

  const handleClick = () => {
    props.displayNamesToggle();
  };

  return (
    <Button onClick={handleClick}>
      {(props.displayNames ? 'Hide' : 'Show').concat(' network names')}
    </Button>
  );

};

const mapStateToProps = state => ({
  displayNames: state.actorNetwork.displayNames
});

const mapDispatchToProps = dispatch => ({
  displayNamesToggle: () => dispatch(actorNetworkDisplayNamesToggle())
});

export default connect(mapStateToProps, mapDispatchToProps)(NameToggle);
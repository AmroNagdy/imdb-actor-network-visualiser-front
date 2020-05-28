import React from 'react';
import { connect } from 'react-redux';
import { actorNetworkDisplayNamesToggle } from '../../actions/network';
import ButtonStyle from '../styles/ButtonStyle';

function NameToggle(props) {

  const handleClick = () => {
    props.displayNamesToggle();
  };

  return (
    <ButtonStyle onClick={handleClick}>
      {(props.displayNames ? 'Hide' : 'Show') + ' network names'}
    </ButtonStyle>
  );

};

const mapStateToProps = state => ({
  displayNames: state.network.displayNames
});

const mapDispatchToProps = dispatch => ({
  displayNamesToggle: () => dispatch(actorNetworkDisplayNamesToggle())
});

export default connect(mapStateToProps, mapDispatchToProps)(NameToggle);
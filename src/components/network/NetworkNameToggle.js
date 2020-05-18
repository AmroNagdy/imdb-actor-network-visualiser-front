import React from 'react';
import { connect } from 'react-redux';
import { actorNetworkDisplayNamesToggle } from '../../actions/network/actorNetwork';
import { LIGHT_GRAY, DARK_GRAY } from '../../constants/AppColours';

const style = {
  backgroundColor: LIGHT_GRAY,
  border: 'none',
  color: DARK_GRAY,
  padding: '15px 32px',
  textAlign: 'center',
  textCecoration: 'none',
  fontSize: '16px',
  marginBottom: '10px',
}

function NameToggle(props) {

  const handleClick = () => {
    props.displayNamesToggle();
  };

  return (
    <button style={style} onClick={handleClick}>
      {'Toggle network names '.concat(props.displayNames ? 'off' : 'on')}
    </button>
  );

};

const mapStateToProps = state => ({
  displayNames: state.actorNetwork.displayNames
});

const mapDispatchToProps = dispatch => ({
  displayNamesToggle: () => dispatch(actorNetworkDisplayNamesToggle())
});

export default connect(mapStateToProps, mapDispatchToProps)(NameToggle);
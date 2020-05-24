import React, { createRef, useEffect } from 'react';
import { connect } from 'react-redux';
import NetworkStyle from '../styles/NetworkStyle';
import LoadingSpinner from './LoadingSpinner';
import renderNetwork from './renderNetwork';
import * as d3 from 'd3';

function Network(props) {

  const networkRef = createRef();

  useEffect(() => {
    d3.select(networkRef.current).selectAll('*').remove();

    if (props.networkData !== null) {
      renderNetwork(networkRef, props.networkData, props.activeNconst, props.displayNames);
    }
  });

  return (
    <div style={{ margin: 'auto' }}>
      {props.loading ? <LoadingSpinner /> : <NetworkStyle ref={networkRef} />}
    </div>
  );

};

const mapStateToProps = state => ({
  activeNconst: state.network.activeNconst,
  networkData: state.network.networkData,
  loading: state.network.loading,
  displayNames: state.network.displayNames
});

export default connect(mapStateToProps)(Network);
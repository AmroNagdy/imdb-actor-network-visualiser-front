import React, { createRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { GRAY, YELLOW, WHITE } from '../../constants/AppColours';
import * as d3 from 'd3';

const style = {
  marginLeft: '30px',
  marginRight: '30px',
  marginBottom: '30px',
  minWidth: '95vw',
  maxWidth: '95vw',
  textAlign: 'center'
};

function renderNetwork(networkRef, width, height, networkData, rootNconst, displayNames) {
  const svg = d3.select(networkRef.current)
    .append('svg')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('preserveAspectRatio', 'xMinYMin meet');

  const links = networkData.links.map(link => Object.create(link));
  const nodes = networkData.nodes.map(node => Object.create(node));
  const strength = -300;

  const simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links).id(d => d.id))
    .force('charge', d3.forceManyBody().strength(strength))
    .force('center', d3.forceCenter(width / 2, height / 2));

  const drag = simulation => {
    const dragStart = d => {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    };

    const drag = d => {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    };

    const dragEnd = d => {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    };

    return d3.drag()
      .on('start', dragStart)
      .on('drag', drag)
      .on('end', dragEnd);
  };

  const link = svg.append('g')
    .attr('stroke', GRAY)
    .attr('stroke-opacity', 0.6)
    .selectAll('line')
    .data(links)
    .join('line')
    .attr('stroke-width', d => Math.sqrt(d.weight));

  const node = svg.append('g')
    .attr('stroke', GRAY)
    .attr('stroke-width', 1.5)
    .selectAll('circle')
    .data(nodes)
    .join('circle')
    .attr('r', 5)
    .attr('fill', d => d.id === rootNconst ? YELLOW : WHITE)
    .call(drag(simulation));

  node.append('title')
    .text(d => d.name);

  const text = displayNames ? svg.append('g')
    .selectAll('text')
    .data(nodes)
    .join('text')
    .text(d => d.name)
    .attr('fill', WHITE)
    .style('font-size', '12')
    .call(drag(simulation)) : null;

  simulation.on('tick', () => {
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);

    node
      .attr('cx', d => d.x)
      .attr('cy', d => d.y);

    if (displayNames) {
      text
        .attr('x', d => d.x)
        .attr('y', d => d.y - 10);
    }
  });
}

function Network(props) {

  const networkRef = createRef();
  const width = 1000;
  const height = 700;

  useEffect(() => {
    d3.select(networkRef.current).selectAll('*').remove();

    if (props.networkData !== null) {
      renderNetwork(networkRef, width, height, props.networkData, props.activeNconst, props.displayNames);
    }
  });

  return (
    <div style={style} ref={networkRef}>
      {props.loading ? 'Loading...' : ''}
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
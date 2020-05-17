import React, { useRef } from 'react';
import { connect } from 'react-redux';
import * as d3 from 'd3';

function Network(props) {

  const networkRef = useRef('network');
  const width = 500;
  const height = 500;

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

  const renderNetwork = networkData => {
    if (networkData === null) {
      return;
    }

    const links = networkData.links.map(link => Object.create(link));
    const nodes = networkData.nodes.map(node => Object.create(node));

    const svg = d3.select('#network')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id))
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(width / 2, height / 2));

    const link = svg.append('g')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6)
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke-width', d => Math.sqrt(d.weight));

    const node = svg.append('g')
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5)
      .selectAll('circle')
      .data(nodes)
      .join('circle')
      .attr('r', 5)
      .call(drag(simulation));

    node.append('title')
      .text(d => d.name);

    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);
    });
  };

  return (
    <svg width={width} height={height} ref={networkRef}>
      {renderNetwork(props.network)}
    </svg>
  );

};

const mapStateToProps = state => ({
  network: state.actorNetwork.network
});

export default connect(mapStateToProps)(Network);
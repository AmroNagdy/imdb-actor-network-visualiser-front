import { GRAY, YELLOW, WHITE } from '../../constants/AppColours';
import * as d3 from 'd3';

export default function renderNetwork(networkRef, networkData, rootNconst, displayNames) {
  const links = networkData.links.map(link => Object.create(link));
  const nodes = networkData.nodes.map(node => Object.create(node));
  const numberOfNodes = nodes.length;
  const scaled = Math.log(Math.pow(numberOfNodes, 2));
  const width = scaled * 170;
  const height = scaled * 130;

  // Network variables.
  const strength = -300;
  const linkOpacity = 0.6;
  const nodeStrokeWidth = 1.5;
  const nodeRadius = 5;
  const nameFontSize = '12';
  const nameTextYOffset = -10;

  const svg = d3.select(networkRef.current)
    .append('svg')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('preserveAspectRatio', 'xMinYMin meet');

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
    .attr('stroke-opacity', linkOpacity)
    .selectAll('line')
    .data(links)
    .join('line')
    .attr('stroke-width', d => Math.sqrt(d.weight));

  const node = svg.append('g')
    .attr('stroke', GRAY)
    .attr('stroke-width', nodeStrokeWidth)
    .selectAll('circle')
    .data(nodes)
    .join('circle')
    .attr('r', nodeRadius)
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
    .style('font-size', nameFontSize)
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
        .attr('y', d => d.y + nameTextYOffset);
    }
  });
}
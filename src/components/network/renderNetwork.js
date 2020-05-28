import { GRAY, YELLOW, WHITE } from '../../constants/AppColours';
import * as d3 from 'd3';
import '../styles/NetworkNodeTooltip.css';

const sortMoviesByYear = (movieA, movieB) => {
  const [startYearA, startYearB] = [movieA.startYear, movieB.startYear];

  if (startYearA > startYearB) {
    return 1;
  } else if (startYearB > startYearA) {
    return -1;
  } else {
    return 0;
  }
};

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

export default function renderNetwork(networkRef, networkData, rootId, displayNames) {
  const links = networkData.links.map(link => Object.create(link));
  const nodes = networkData.nodes.map(node => Object.create(node));
  const numberOfNodes = nodes.length;
  const scaled = 2 * Math.log(numberOfNodes);
  const width = scaled * 170;
  const height = scaled * 130;

  // Network variables.
  const strength = -300;
  const linkOpacity = 0.6;
  const nodeStrokeWidth = 1.5;
  const nodeRadius = 6;
  const nameFontSize = '14';
  const nameTextYOffset = -12;

  const svg = d3.select(networkRef.current)
    .append('svg')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('preserveAspectRatio', 'xMinYMin meet');

  const simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links).id(d => d.id))
    .force('charge', d3.forceManyBody().strength(strength))
    .force('center', d3.forceCenter(width / 2, height / 2));

  // Build links.
  const link = svg.append('g')
    .attr('stroke', GRAY)
    .attr('stroke-opacity', linkOpacity)
    .selectAll('line')
    .data(links)
    .join('line')
    .attr('stroke-width', d => Math.sqrt(d.weight));

  // Build nodes.
  const node = svg.append('g')
    .attr('stroke', GRAY)
    .attr('stroke-width', nodeStrokeWidth)
    .selectAll('circle')
    .data(nodes)
    .join('circle')
    .attr('r', nodeRadius)
    .attr('fill', d => d.id === rootId ? YELLOW : WHITE)
    .call(drag(simulation));

  // Add mouseover effects to nodes.
  const nodeTooltip = d3.select(networkRef.current)
    .append('div')
    .attr('class', 'network-node-tooltip')
    .style('opacity', 0);

  const buildTooltipHtml = d => {
    const id = d.id;
    const relevantLinks = links.filter(link => link.__proto__.source === id || link.__proto__.target === id)
    const relevantMovies = relevantLinks
      .flatMap(link => link.__proto__.movies)
      .sort(sortMoviesByYear);

    const toString = movie => '<b>' + movie.primaryTitle + '</b> ' + movie.startYear + ' (' + movie.averageRating + ')';
    const uniqueMovies = new Set(relevantMovies.map(movie => toString(movie)));

    return [...uniqueMovies].join('<br>');
  };

  node
    .on('mouseover', function (d, i) {
      // Mouseover node dims the highlighted node slightly.
      d3.select(this).transition()
        .duration('50')
        .attr('opacity', '.85');

      // Mouseover node opens box to show what movies they have been in.
      nodeTooltip.transition()
        .duration(50)
        .style('opacity', '.95');
      nodeTooltip.html(buildTooltipHtml(d))
        .style('left', (d3.event.pageX + 10) + 'px')
        .style('top', (d3.event.pageY - 15) + 'px');
    })
    .on('mouseout', function (d, i) {
      // Undo: mouseover node dims the highlighted node slightly.
      d3.select(this).transition()
        .duration('50')
        .attr('opacity', '1');

      // Undo: mouseover node opens box to show what movies they have been in.
      nodeTooltip.transition()
        .duration('50')
        .style('opacity', 0);
    });

  // Display names next to nodes if displayNames is true.
  const text = displayNames ?
    svg.append('g')
      .selectAll('text')
      .data(nodes)
      .join('text')
      .text(d => d.name)
      .attr('fill', WHITE)
      .style('font-size', nameFontSize)
      .call(drag(simulation)) :
    null;

  // Render network.
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
import React from 'react';

const searchResultStyle = () => {
  return {
    background: '#f4f4f4',
    padding: '10px',
    borderBottom: '1px #ccc dotted'
  };
};

export default function SearchResult(entry) {

  return (
    <div
      style={searchResultStyle}>
      <p> {entry.name} </p>
    </div >
  );

}
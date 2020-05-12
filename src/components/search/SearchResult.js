import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SearchResult extends Component {

  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted'
    }
  }

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          {this.props.searchResult.name}
        </p>
      </div>
    )
  }

}

SearchResult.propTypes = {
  searchResult: PropTypes.object.isRequired
}

export default SearchResult

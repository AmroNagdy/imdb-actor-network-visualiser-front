import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchResult from './SearchResult';

export class SearchResultList extends Component {
    render() {
        return (
            this.props.searchResults.map((searchResult) =>
                <SearchResult key={searchResult.id} searchResult={searchResult} />
            )
        )
    }
}

SearchResultList.propTypes = {
    searchResults: PropTypes.array.isRequired
}

export default SearchResultList

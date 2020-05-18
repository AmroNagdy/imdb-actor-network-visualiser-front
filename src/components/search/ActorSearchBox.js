import React, { useState } from 'react';
import { connect } from 'react-redux';
import actorSearchRequest from '../../actions/search/actorSearchRequest';

function SearchBox(props) {

  const [name, setName] = useState('');
  const searchLimit = 10;

  const handleSubmit = (event) => {
    event.preventDefault();
    props.searchRequest(name, searchLimit);
    setName('');
    return false;
  }

  return (
    <form onSubmit={props.loading ? () => false : handleSubmit}>
      <label>
        {'Lookup an actor by name '}
        <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </label>
      <input type='submit' value={props.loading ? 'Loading...' : 'Search'} />
    </form >
  );

};

const mapStateToProps = state => ({
  loading: state.actorSearchResults.loading
});

const mapDispatchToProps = dispatch => ({
  searchRequest: (name, limit) => dispatch(actorSearchRequest(name, limit))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
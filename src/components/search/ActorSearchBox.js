import React, { useState } from 'react';
import { connect } from 'react-redux';
import actorSearchRequest from '../../actions/search/actorSearchRequest';
import Form from '../styles/Form';

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
    <Form onSubmit={props.loading ? () => false : handleSubmit}>
      <input
        type='text'
        value={name}
        onChange={event => setName(event.target.value)}
        placeholder='Lookup an actor 🔍'
      />
    </Form >
  );

};

const mapStateToProps = state => ({
  loading: state.actorSearchResults.loading
});

const mapDispatchToProps = dispatch => ({
  searchRequest: (name, limit) => dispatch(actorSearchRequest(name, limit))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
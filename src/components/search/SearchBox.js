import React, { useState } from 'react';
import { connect } from 'react-redux';
import actorSearchRequest from '../../actions/searchRequest';
import FormStyle from '../styles/FormStyle';

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
    <FormStyle onSubmit={props.loading ? () => false : handleSubmit}>
      <input
        type='text'
        value={name}
        onChange={event => setName(event.target.value)}
        placeholder='Lookup an actor 🔍'
      />
    </FormStyle>
  );

};

const mapStateToProps = state => ({
  loading: state.searchResult.loading
});

const mapDispatchToProps = dispatch => ({
  searchRequest: (name, limit) => dispatch(actorSearchRequest(name, limit))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
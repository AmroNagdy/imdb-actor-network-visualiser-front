import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchRequest as searchRequestAction } from '../../actions/search/searchRequest';

function SearchBox(props) {

  const [name, setName] = useState('');
  const searchLimit = 10;

  const handleSubmit = (event) => {
    event.preventDefault();
    props.searchRequest(name, searchLimit);
    setName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {'Search for actor name: '}
        <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </label>
      <input type='submit' value='Search' />
    </form>
  );

};

const mapDispatchToProps = dispatch => ({
  searchRequest: (name, limit) => dispatch(searchRequestAction(name, limit))
});

export default connect(null, mapDispatchToProps)(SearchBox);
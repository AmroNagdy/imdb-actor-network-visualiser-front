import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchBoxSubmit } from '../../actions/search/searchBoxSubmit'

export default function SearchBox(props) {

  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting Name ${name}`);
    dispatch(searchBoxSubmit(name));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Frirst Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );

}
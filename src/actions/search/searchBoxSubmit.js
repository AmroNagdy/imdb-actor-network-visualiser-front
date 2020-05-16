export const searchBoxSubmit = (name, limit) => ({
  type: 'SEARCH_BY_NAME',
  payload: {
    name: name,
    limit: limit
  }
});
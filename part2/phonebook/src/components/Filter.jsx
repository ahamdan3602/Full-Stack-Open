const Filter = ({ search, handleSearchName }) => {
  return (
    <div>
      filter shown with
      <input value={search} onChange={handleSearchName}></input>
    </div>
  );
};

export default Filter;

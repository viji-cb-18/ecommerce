function SearchBar({ setSearchTerm }) {
    return (
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search products..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    )
  }
  
  export default SearchBar
  
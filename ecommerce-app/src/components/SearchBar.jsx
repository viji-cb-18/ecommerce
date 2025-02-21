import { useState } from 'react'

function SearchBar({ setSearchTerm }) {
  const [inputValue, setInputValue] = useState("")

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);
    setSearchTerm(value); 
  }

  const clearSearch = () => {
    setInputValue("")
    setSearchTerm("")
  }

  return (
    <div className="mb-3 d-flex">
      <input
        type="text"
        className="form-control"
        placeholder="Search products..."
        value={inputValue}
        onChange={handleSearch}
      />
      {inputValue && (
        <button className="btn btn-secondary ms-2" onClick={clearSearch}>
          Clear
        </button>
      )}
    </div>
  )
}

export default SearchBar

  
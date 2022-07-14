import React from 'react'
import "./Search.css"

function Search({searchText, setSearchText}) {
  return (
    
    <input 
        className="search--input"
        type="text" 
        value={searchText} 
        placeholder="Search" 
        onChange={(event) => setSearchText(event.target.value)}
    />
    
  )
}

export default Search
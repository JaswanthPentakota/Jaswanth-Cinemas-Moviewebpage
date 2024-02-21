import React from 'react'
import './search.css'
export default function SearchBar({ onSearch }) {
  const [query, setQuery] = React.useState('')
  const handleSearch = () => {
    onSearch(query)
  }
  return (
    <div className='search'>
      <input type="text" placeholder='search' value={query} onChange={(e) => setQuery(e.target.value)} />
      <button style={{background:"rgba(117, 117, 117, 0.669)"}} onClick={handleSearch}>
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  )
}
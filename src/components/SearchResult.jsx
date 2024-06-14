import React from 'react'

import './SearchResult.css'

const SearchResult = ({ result }) => {
    return (
        <div
            className='search-result'
            onClick={(e) => alert(`You Clicked on ${result}`)}
        >
            {result.name}
        </div>
    )
}

export default SearchResult

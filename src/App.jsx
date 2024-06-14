import { useState } from 'react'
import SearchBar from './components/SearchBar'
import './App.css'
import SearchResultsLists from './components/SearchResultsLists';

function App() {

  const [results , setResults ] = useState([]);
  return (
      <div className='App'>
       <div className="search-bar-container">
        <SearchBar setResults={setResults}/>
        {/* <div>SearchBar</div> */}
        {/* <div>SearchResults</div> */}
        <SearchResultsLists results={results}/>
       </div>
      </div>
  )
}

export default App

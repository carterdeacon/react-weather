import React, {useState} from 'react'

const Search = (props) => {
    const [location, setLocation] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!location || location === '') {
            return
        }
        props.submitSearch(location);
    }

    return (
        <form onSubmit={handleSubmit} action="">
            <input type="text" 
            placeholder='Search a location'
            value={location} 
            onChange={e => setLocation(e.target.value)}/>
            <button type='submit' onClick={handleSubmit}>Search</button>
        </form>
    )
}

export default Search
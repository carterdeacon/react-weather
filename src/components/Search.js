import React, {useState, useEffect} from 'react'
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import './Search.css'
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const SearchAutoComplete = (props) => {

    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
      requestOptions: {
        /* Define search scope here */
      },
      debounce: 300,
    });

    const ref = useOnclickOutside(() => {
      // When user clicks outside of the component, we can dismiss
      // the searched suggestions by calling this method
      clearSuggestions();
    });
  
    const handleInput = (e) => {
      // Update the keyword of the input element
      setValue(e.target.value);
    };
  
    const handleSelect =
      ({ description }) =>
      () => {
        // When user selects a place, we can replace the keyword without request data from API
        // by setting the second parameter to "false"
        setValue(description, false);
        clearSuggestions();
  
        // Get latitude and longitude via utility functions
        getGeocode({ address: description })
          .then((results) => getLatLng(results[0]))
          .then(({ lat, lng }) => {
            handleSubmit(lat, lng);
          })
          .catch((error) => {
            console.log("😱 Error: ", error);
          });
      };

    
    const handleSubmit = (lat, lng) => {
        
        if (!lat || lat === '') {
            return
        }
        props.submitSearch(lat, lng);
    }
  
    const renderSuggestions = () =>
      data.map((suggestion) => {
        const {
          place_id,
          structured_formatting: { main_text, secondary_text },
        } = suggestion;
  
        return (
          <li 
          className="location-list" 
          key={place_id} 
          onClick={handleSelect(suggestion)}>
            <strong>{main_text}</strong> <small>{secondary_text}</small>
          </li>
        );
      });
  
    return (
      <div className='search-bar' ref={ref}>
        <form onSubmit={handleSubmit} action="">
            < TextField
                id="outlined-basic"
                label="Search location"
                type="search"
                variant="outlined"
                value={value}
                onChange={handleInput}
                disabled={!ready}
            />
        {status === "OK" && <ul className="location-list-ul">{renderSuggestions()}</ul>}
        </form>
      </div>
    );
  };

export default SearchAutoComplete
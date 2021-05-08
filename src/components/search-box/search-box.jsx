import React from 'react'
import './search-box.css'

 export const SearchBox = ({placeholder,handleChange}) =>(
    <input
        className="search" 
        type="search" 
        onChange={event=>handleChange(event.target.value)} 
        placeholder={placeholder}
    />
)
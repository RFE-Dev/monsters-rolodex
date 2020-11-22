import React from 'react';
import './search-box.styles.css';

export const Searchbox = ({placeholder, handlechange})=>(
    <input
        className= 'search'
        type='search'
        placeholder={placeholder}
        onChange={handlechange}
    />
);
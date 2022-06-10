import React from 'react';
import Card from '../Card/Card';
import classes from "./SearchBar.module.css";

function SearchBar({placeholder, className}) {
  return (
    <Card className={`${classes.card} ${className}`}>
      <img src="https://random.imagecdn.app/900/150" alt="searchLogo" width="32px" height="32px"/>
      <input type="text" placeholder={placeholder}/>
    </Card>
  )
}

export default SearchBar
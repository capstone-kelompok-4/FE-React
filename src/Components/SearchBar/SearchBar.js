import React from 'react';
import Card from '../Card/Card';
import classes from "./SearchBar.module.css";
import SearchIcon from "../../Assets/Icons/search.svg";

function SearchBar({onChange, placeholder, className}) {

  return (
    <Card className={`${classes.card} ${className}`}>
      <img src={SearchIcon} alt="searchLogo" width="30px" height="30px"/>
      <input type="text" placeholder={placeholder} onChange={onChange}/>
    </Card>
  )
}

export default SearchBar
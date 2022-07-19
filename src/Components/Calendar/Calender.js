import React, { useState } from 'react'
import { Calendar } from 'react-calendar'
import "./Calender.css";

function Calender() {
  const [value, onChangeCalendar] = useState(new Date());
  return (
    <Calendar onChange={onChangeCalendar} value={value}/>
  )
}

export default Calender;
import React from 'react'
import Navbar from "../Navigation/Navbar";

function Layouts({children}) {
  return (
    <>
      <Navbar/>
      <div>{children}</div>
    </>
  )
}

export default Layouts
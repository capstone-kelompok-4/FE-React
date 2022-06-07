import React from "react";
import Navbar from "../Navigation/Navbar";

function Layouts({ children }) {
  const isLogin = false;
  return (
    <>
      <Navbar isLogin={isLogin} />
      <div>{children}</div>
    </>
  );
}

export default Layouts;

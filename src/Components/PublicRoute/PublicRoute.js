import React, { useEffect } from 'react'
import {useSelector} from "react-redux";
import { Outlet, useNavigate } from 'react-router-dom';

function PublicRoute() {
  const isLogin = useSelector((state) => state.user.isLogin);
  console.log(isLogin);
  const navigate = useNavigate();
  useEffect(() => {
    if(isLogin){
      return navigate("/");
    }
  }, [isLogin, navigate])
  return !isLogin && <Outlet/>;

}

export default PublicRoute;
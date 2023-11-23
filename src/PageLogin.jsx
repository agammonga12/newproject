import React,{useState,useEffect} from 'react';
import MyContext from "./Context/Context"
import { useNavigate } from "react-router-dom";

const PageLogin = ({children}) => {
    const [loginUser,setLoginUser]=useState(false);

   
  return (
    <div>
    
<MyContext.Provider value={{loginUser,setLoginUser}}>
    {children}
</MyContext.Provider>

    </div>
  );
}

export default PageLogin;

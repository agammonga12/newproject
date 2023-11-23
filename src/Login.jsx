import React from 'react';
import { Link} from "react-router-dom";
import { useContext } from 'react';
import MyContext from './Context/Context';


const Login = () => {
    const{setLoginUser}= useContext(MyContext);

    const LoginHandle=()=>{
        setLoginUser(true)
    };



  return (
    <>  
    <div  style={{border:"3px solid", width:"400px",height:"300px", marginLeft:"330px", margin:"50px auto"}}>
    <form >
  <div className="form-group m-4 " >
    <label for="exampleInputEmail1">Login Id</label>
    <input type="text" name='text' className="form-control"  aria-describedby="emailHelp"  placeholder="Enter Login Id"/>
   
  </div>
  <div className="form-group m-4 ">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name='password' className="form-control "  placeholder="Password"/>
  </div>
  <div className="form-check" style={{margin:"20px"}}>
    <input type="checkbox" className="form-check-input" />
    <label className="form-check-label"style={{marginLeft:"4px"}} >Check me out</label>
    <button onClick={LoginHandle} type="submit" className="btn btn-primary  h-20" style={{ marginLeft:"130px"}} ><Link to="/" style={{textDecoration:"none",color:'whitesmoke'}}>Login</Link> </button>
  </div >
</form>
    </div>
      
    </>
  );
}

export default Login;

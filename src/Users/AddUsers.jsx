import React,{useState}from "react";
import  {useNavigate} from'react-router-dom';
import axios from "axios";

const AddUsers = () => {
  let navigate=useNavigate();
    const [user,setUser]=useState({
        name :"",
        username:"",
        email:"",
        phone:"",
        website:""
    });
    const {name,username,email,phone,website}=user;
    const onInputChange=(e)=>{
       setUser({...user,[e.target.name]:e.target.value})
    };

    const onSubmit= async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:3003/users",user);
        navigate('/Home');
    }
  return (
    <>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add User</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={e=> onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your user Name"
                name="username"
                value={username}
                onChange={e=> onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your Email Address"
                name="email"
                value={email}
                onChange={e=> onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Mobile"
                name="phone"
                value={phone}
                onChange={e=> onInputChange(e)}
              />
            </div>     
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Website"
                name="website"
                value={website}
                onChange={e=> onInputChange(e)}
              />
            </div>  
            <button className="btn btn-primary btn-block ">Add User</button>
            </form>
          </div>
        </div>
    </>
  );
};

export default AddUsers;

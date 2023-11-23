import React,{useState,useEffect}from 'react';
import axios,{isCancel, AxiosError}  from "axios";
import {Link, NavLink} from "react-router-dom";

const Home = () => {
 const [users,setUsers]=useState([]);


 useEffect(()=> {
    loadUser();
 },[]);

 const loadUser = async()=>{
    const results = await axios.get("http://localhost:3003/users");
    setUsers(results.data.reverse());
 }

 const deleteUser = async(id) =>{
  await axios.delete(`http://localhost:3003/users/${id}`);
  loadUser();

 }

 
  return (
    <div className='container' style={{backgroundColor:"InfoBackground"}}>
        <div className='py-4'>
            <h1>Home Page</h1>
            <Link className="btn btn-outline-dark" to="/AddUsers">Add User</Link>
            <div class="table-responsive">
<table class="table caption-top table-hover border shadow">
  <caption>List of users</caption>
  <thead class="table-dark ">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Phone no.</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    
    {
        users.map((user,index)=>(
            <tr>
         {console.log(users)}
            <th scope='row'>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
                <Link class='btn btn-primary' to={`/View/${user.id}`}><i class="fa-solid fa-eye"></i></Link>
                <Link class='btn btn-outline-primary m-1' to={`/EditUser/${user.id}`}><i class="fa-solid fa-pen-to-square"></i></Link>
                <Link class='btn btn-danger' onClick={()=> deleteUser(user.id)}><i class="fa-solid fa-trash-can"></i></Link>
            </td>
            </tr>
        ))
    }
  </tbody>
</table>
</div>
        </div>
      
    </div>
  );
}

export default Home;

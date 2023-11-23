import React from 'react';
import img from './images/deposit.jpg';
import pic from './images/deposit1.jpg';
import { Link} from "react-router-dom";
import { useContext } from 'react';
import MyContext from './Context/Context';



const MansUp = () => {
    
return(
  <>
  <div id="carouselExampleCaptions" className="carousel slide">
 
  <div className="carousel-inner">
    <div className="carousel-item active">
      
      <img src={img} className="d-block" style={{width:"220vh ", height:"470px"}} alt="..."/> 
      
      <div className="carousel-caption d-none d-md-block">
      <span> <h5>Welcome to Our Page </h5></span>
      </div>
    </div>
    <div className="carousel-item">
      <img src={pic} className="d-block" style={{width:"220vh ", height:"470px"}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p></p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> 
  <footer>
  <div className="container text-center">
  <div className="row align-items-center">
    <div className="col" >
      CONTACT US 
      <hr />
      <p>Street 238,62,Park Avenue,
        London,UK</p>
        <h6>Phone: <span>+345 73848 7873</span></h6>
        <h6>Email: <span>support@gmail.com</span></h6>
        <h6>Website: <span>S-kart23$.net</span></h6>

    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
</div>
    </footer>   
  </>
);
};

export default MansUp;

import React from 'react'
import left from '../../images/left.jpg';
import  '../../styles/footer.css'
import {FaGooglePlus,FaTelegram} from 'react-icons/fa';
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi';
const icons={
    height:"20px",
    width:"20px",
    margin: "0.5rem",
  
   
}
export default function () {
    return (
      
    
          <div>
            <div class="row footer">
                {/* Who we are */}
                <div class="col-md-3 col">
                <h6 class="text">Who We Are</h6>
                <ul class="list-unstyled">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">link 3</a>
          </li>
          <li>
            <a href="#"> link 4</a>
          </li>
        </ul>
                </div>
                 {/* Support */}
                <div class="col-md-3 col">
                <h6 class="text">Support</h6>
                <ul class="list-unstyled">
          <li>
            <a href="#">Knowledge </a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#"> link 3</a>
          </li>
          <li>
            <a href="#">Terms Of Use</a>
          </li>
        </ul>
                </div>
                  {/* Contact Us */}
                <div class="col-md-3 col">
                <h6 class="text">Contact Us</h6>
                <ul class="list-unstyled">
          <li>
            <a href="#">Mobile </a>
          </li>
          <li>
            <a href="#">Email </a>
          </li>
          <li>
            <a href="#"> Location</a>
          </li>
        </ul>
                </div>
                  {/* Contact Us */}
                <div class="col-md-3 col">
                <h6 class="text">Now</h6>
                <ul class="list-unstyled">
          <li>
           <p>bbbbbbb</p>
          </li>
          <li>
           <div class="inputwithicon">
          <input type="text" placeholder="  write you email "/><FaTelegram class="paperplane"/></div>   
          </li>
          <li class="icons" >
          <a href="#"> <FiFacebook style={icons}/></a>
            <a href="#"> <FiTwitter  style={icons}/></a>
            <a href="#"> <FiInstagram  style={icons}/></a>
            <a href="#"> <FaGooglePlus  style={icons}/></a>
          </li>
        </ul>
                </div>

            
            </div>
          
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
             </button>
     <div class="collapse navbar-collapse" id="navbarNav">
       
        <ul class="navbar-nav mx-auto">
             <li class="nav-item active">
                 <a class="nav-link" href="#">Shop <span class="sr-only">(current)</span></a>
            </li>
             <li class="nav-item">
             <a class="nav-link" href="#">Service</a>
              </li>
             <li class="nav-item">
                 <a class="nav-link" href="#">Journal</a>
             </li>

             <li class="nav-item">
                 <a class="nav-link" href="#">About</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="#">Support</a>
             </li>
         </ul>
        <a class="nav-link" href="#">$Copy Right 2019</a>
     </div>
 </nav>
           
            </div>
           


    )
}
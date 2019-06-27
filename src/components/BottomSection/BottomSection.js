import React from 'react'
import {FaGooglePlus,FaTelegram} from 'react-icons/fa';
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi';
import  '../../styles/footer.css'


const icons={
    height:"20px",
    width:"20px",
    margin: "0.5rem",
  
   
}
const newsLetterEmail={
    
    
}
export default function () {
    const bottomSection={
        paddingBottom :'20px'
    }
    return (


            <div class="row footer" style={bottomSection}>
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
                            <a href="#">Feature Tour</a>
                        </li>
                        <li>
                            <a href="#">Presentation</a>
                        </li>
                    </ul>
                </div>
                {/* Support */}
                <div class="col-md-3 col">
                    <h6 class="text">Support</h6>
                    <ul class="list-unstyled">
                        <li>
                            <a href="#">Knowledge Base</a>
                        </li>
                        <li>
                            <a href="#">Video Guides</a>
                        </li>
                        <li>
                            <a href="#">  Report a Bug</a>
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
                            <a href="#" class="text-decoration-none " >hello@module.com </a>
                        </li>
                        <li>
                            <a href="#" class="text-decoration-none">Studio M, 4th Flool, 8 Lower Manchester street, M1 5QF </a>
                        </li>
                        <li>
                            <a href="#" class="text-decoration-none"> +38 976 0875 9922</a>
                        </li>
                    </ul>
                </div>
                {/* Contact Us */}
                <div class="col-md-3 col">
                    <h6 class="text">News Letter</h6>
                    <ul class="list-unstyled">
                        <li>
                            <p>    <h7> subscribe to the newletter and get some crispy staff every week</h7></p>
                        </li>
                        <li>
                            <div class="inputwithicon">
                                <input type="email" placeholder=" enter write you email  here" style={newsLetterEmail} /><FaTelegram class="paperplane" /></div>
                        </li>
                        <li class="icons" >
                            <a href="#"> <FiFacebook style={icons} /></a>
                            <a href="#"> <FiTwitter style={icons} /></a>
                            <a href="#"> <FiInstagram style={icons} /></a>
                            <a href="#"> <FaGooglePlus style={icons} /></a>
                        </li>
                    </ul>
                </div>


            </div>
    


    )
}
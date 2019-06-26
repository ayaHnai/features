import React from 'react'
import {FaShoppingCart} from 'react-icons/fa';
import {FaRegQuestionCircle} from 'react-icons/fa'
const iconstyle = {
  fill: "black",
  margin:"0",
  padding:"0"
  
}
const astyle={
  margin:"0"
}
const questionstyle={
  fill:"none"
}
  

export default function () {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link  d-inline" href="#">Shop <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link  d-inline" href="#">Service</a>
          </li>
          <li class="nav-item">
            <a class="nav-link  d-inline" href="#">Journal</a>
          </li>
        </ul>

        <a class="navbar-brand mx-auto" href="#" >UModo<sup>01</sup></a>

        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link  d-inline" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link  d-inline" href="#">Sign In </a>
          </li>
          <li class="nav-item ">
            <FaShoppingCart style={iconstyle}/> <a class="nav-link d-inline" href="#" style={astyle}>Cart </a><FaRegQuestionCircle />
        
          </li>

        </ul>
      </div>
    </nav>



  )
}
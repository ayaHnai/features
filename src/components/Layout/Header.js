import React from 'react'
export default function () {
  return (
    <nav class="navbar navbar-expand-md navbar-light bg-white sticky-top">

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ">
          <li class="nav-item active">
            <a class="nav-link " href="#">Shop <span class="sr-only"></span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Service</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">Journal</a>
          </li>
        </ul>

        <a class="navbar-brand mx-auto font-weight-bold" href="#" >UModo<sup>01</sup></a>

        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sign In </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Cart <span class="badge   border border-dark   bg-white   badge-pill">1</span></a>
          </li>

        </ul>
      </div>
    </nav>



  )
}
import React from 'react'
export default function () {
    
const footerStyle ={
    fontSize: '11px',
    color:'#989898'
}

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
   
           
            <div class="collapse navbar-collapse" id="navbarNav">

                <ul class="navbar-nav font-weight-normal mx-auto">
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
                 <span style={footerStyle}> &copy; 1823-2016 Great Simple Studio</span>
            </div>
        </nav>



    )
}
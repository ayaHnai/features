import React from 'react'
import ChoicesComponetTitle from './ChoicesComponetTitle';
import left from '../../../images/left.jpg';
import  '../../../styles/choices.css'
import {FiShoppingCart} from 'react-icons/fi';

import '../../../../node_modules/font-awesome/css/font-awesome.min.css'; 

export default function () {
    return (
        <div>
            <ChoicesComponetTitle />
            <div class="container">
                <div class="row">
                    <div class="col" >
                    <div  class="cards">
                    <img src={left} alt="left"  />
                    <p>Blablablaaaaaa</p>
                    <p id='price'>$45</p>
                    <button class="btn">Shop Now <FiShoppingCart class='s'/></button>
                     </div>
                     </div>
                    <div class="col">
                    <div  class="cards">
                            <img src={left} alt="left" />
                             
                    <p>Blablablaaaaaa</p>
                    <p id='price'>$45</p>
                    <button class="btn">Shop Now </button>
                    </div>
                    </div>
                    <div class="col">
                    <img src={left} alt="left" />
                    </div>
                    <div class="col">
                    <img src={left} alt="left" />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    <img src={left} alt="left" />
                     </div>
                    <div class="col">
                            <img src={left} alt="left" />
                    </div>
                    <div class="col">
                    <img src={left} alt="left" />
                    </div>
                    <div class="col">
                    <img src={left} alt="left" />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    <img src={left} alt="left" />
                     </div>
                    <div class="col">
                            <img src={left} alt="left" />
                    </div>
                    <div class="col">
                    <img src={left} alt="left" />
                    </div>
                    <div class="col">
                    <img src={left} alt="left" />
                    </div>
                </div>
            </div>
        </div>
    )
}
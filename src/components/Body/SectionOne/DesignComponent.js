import React from 'react'
import DesignTilte from './DesignComponentTitle'
import left from '../../../images/left.jpg';
import right from '../../../images/right.png';

export default function () {
const designSection ={
    marginLeft: 'auto',
    padding:'30px',
    width: '60%'
  

    
}
const leftDesign ={    
    
    padding:'15px'
}
const rightDesign ={    
   
    padding:'15px'
   
}
    return (
        <div>

            <div class="container" style={designSection}>
                <div class="row  " >

                    <div  style={leftDesign}>

                        <img src={left} alt="left" />
                    </div>
                    <div  style={rightDesign}>
                        <DesignTilte />
                        <div>
                        <img src={right} alt="right" />
                        </div>
                        <div>
                            <button type="button" class="btn btn-danger">Design Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )


}
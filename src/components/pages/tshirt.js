import React from 'react'
import tshirt from '../../images/shirt.png'
const sty={
    img:
    {
    width:"70%",
    
    }
}
 export default function TShirt()
 {
     return(
         <div>
             <img src={tshirt} style={sty.img} />
         </div>
     )
 }
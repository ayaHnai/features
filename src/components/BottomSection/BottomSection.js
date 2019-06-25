import React from 'react'
import BottomSectionLeft from './BottomSectionLeft';
import BottomSectionRight from './BottomSectionRight';
export default function () {
    return (

        <div class="container">
            <div class="row">
                <div class="col-sm-8">  <BottomSectionLeft /></div>
                <div class="col-sm-4">   <BottomSectionRight /></div>
            </div>
        </div>


    )
}
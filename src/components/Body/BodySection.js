import React from 'react'
import DesignComponent from './SectionOne/DesignComponent'
import ChoicesComponent from './SectionTwo/ChoicesComponent'
export default function () {
    const bodyStyle = {
  
        };
      
    return (
        <div    style={bodyStyle} class="bg-light">
            <DesignComponent />
            <ChoicesComponent />
        </div>
    )

}
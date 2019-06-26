import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default function () {
    return (


        <form >

            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">News Letter</h5>
            <h7> subscribe to the newletter and get some crispy staff every week</h7>
            <FontAwesomeIcon icon="faPaperPlane" />
            <div class="input-group mb-3">

                <input type="email" class="form-control" placeholder="Enter your e-mail here"  />
      
               
            </div>

        </form>






    )
}
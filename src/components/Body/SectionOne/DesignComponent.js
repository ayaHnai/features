import React from 'react'
import DesignTilte from './DesignComponentTitle'
import left from '../../../images/left.jpg';
import right from '../../../images/right.png';

export default function () {
    return (
        <div>

            <div class="container px-lg-5">
                <div class="row mx-lg-n5">

                    <div class="col py-3 px-lg-5  bg-light">

                        <img src={left} alt="left" />
                    </div>
                    <div class="col py-3 px-lg-5  bg-light">
                        <DesignTilte />
                        <img src={right} alt="right" />
                        <div>
                            <button type="button" class="btn btn-danger">Design Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )


}
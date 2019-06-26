import React from 'react'
import ChoicesComponetTitle from './ChoicesComponetTitle';
import left from '../../../images/left.jpg';
export default function () {
    const communityChoicesStyles = {
        paddingBottom:"30px"


    }
    const externalCard={
        padding :'15px'
    }
    const card = {
        background: '#FF3399',
        padding: '15px 15px 35px 15px'
    }
    const card2 = {
        background: '#FFdd99',
        padding: '15px 15px 35px 15px'
        }

    const card3 = {
        background: '#aadd99',
        padding: '15px 15px 35px 15px'
    }


    return (
        <div style={communityChoicesStyles}>
            <ChoicesComponetTitle />
            <div class="container">
                <div class="row">
                    <div class="col"  style ={externalCard}>
                        <div style={card}>
                            <img src={left} alt="left" />
                            <div>
                                <div id="description">Leica X2 APS-C Compact Camera</div>
                                <div id="color">Black</div>
                                <div id="price">$499</div>
                            </div>
                        </div>
                    </div>
                    <div class="col"  style ={externalCard}>
                        <div style={card2}>
                        <img src={left} alt="left" />
                        <div>
                            <div id="description">Leica X2 APS-C Compact Camera</div>
                            <div id="color">Black</div>
                            <div id="price">$499</div>
                        </div>
                        </div>
                    </div>
                    <div class="col"  style ={externalCard}>
                        <div style={card3}>
                        <img src={left} alt="left" />
                        <div>
                            <div id="description">Leica X2 APS-C Compact Camera</div>
                            <div id="color">Black</div>
                            <div id="price">$499</div>
                        </div>
                        </div>
                    </div>
                    <div class="col"  style ={externalCard}>
                        <div style={card}>
                        <img src={left} alt="left" />
                        <div>
                            <div id="description">Leica X2 APS-C Compact Camera</div>
                            <div id="color">Black</div>
                            <div id="price">$499</div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                <div class="col"  style ={externalCard}>
                        <div style={card}>
                            <img src={left} alt="left" />
                            <div>
                                <div id="description">Leica X2 APS-C Compact Camera</div>
                                <div id="color">Black</div>
                                <div id="price">$499</div>
                            </div>
                        </div>
                    </div>
                    <div class="col"  style ={externalCard}>
                        <div style={card2}>
                        <img src={left} alt="left" />
                        <div>
                            <div id="description">Leica X2 APS-C Compact Camera</div>
                            <div id="color">Black</div>
                            <div id="price">$499</div>
                        </div>
                        </div>
                    </div>
                    <div class="col"  style ={externalCard}>
                        <div style={card3}>
                        <img src={left} alt="left" />
                        <div>
                            <div id="description">Leica X2 APS-C Compact Camera</div>
                            <div id="color">Black</div>
                            <div id="price">$499</div>
                        </div>
                        </div>
                    </div>
                    <div class="col"  style ={externalCard}>
                        <div style={card}>
                        <img src={left} alt="left" />
                        <div>
                            <div id="description">Leica X2 APS-C Compact Camera</div>
                            <div id="color">Black</div>
                            <div id="price">$499</div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                <div class="col"  style ={externalCard}>
                        <div style={card}>
                            <img src={left} alt="left" />
                            <div>
                                <div id="description">Leica X2 APS-C Compact Camera</div>
                                <div id="color">Black</div>
                                <div id="price">$499</div>
                            </div>
                        </div>
                    </div>
                    <div class="col"  style ={externalCard}>
                        <div style={card2}>
                        <img src={left} alt="left" />
                        <div>
                            <div id="description">Leica X2 APS-C Compact Camera</div>
                            <div id="color">Black</div>
                            <div id="price">$499</div>
                        </div>
                        </div>
                    </div>
                    <div class="col"  style ={externalCard}>
                        <div style={card3}>
                        <img src={left} alt="left" />
                        <div>
                            <div id="description">Leica X2 APS-C Compact Camera</div>
                            <div id="color">Black</div>
                            <div id="price">$499</div>
                        </div>
                        </div>
                    </div>
                    <div class="col"  style ={externalCard}>
                        <div style={card}>
                        <img src={left} alt="left" />
                        <div>
                            <div id="description">Leica X2 APS-C Compact Camera</div>
                            <div id="color">Black</div>
                            <div id="price">$499</div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
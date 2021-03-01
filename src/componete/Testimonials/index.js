import React from 'react';
import './Testimonials.scss';
import Carousel from 'react-elastic-carousel';
import axios from 'axios';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
]
class Testemonia extends React.Component{
        render(){
            return(
                <div className="testemonia">
                    <div className="container container-pr-pl">
                        <div className="row">
                            <div className="col">
                                <h2> Read Our Customer Testimonials </h2>
                            </div>
                            <div className="col">
                                <p> Our clients are our partners and we can not imagine a better future for our company without helping them reach their objectives </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                               <div className="slider-container">
                                    <div className="swiper-container card-slider swiper-container-horizontal">
                                        <div className="swiper-wrapper">
                                        <Carousel breakPoints = {breakPoints}>
                                            <div className="swiper-slider">
                                                <img src='images/testimonial-1.jpg' alt="" />
                                                    <div className="content-text">
                                                    <div className="content-text-margin">Aria's CEO personally attends client meetings and gives his feedback on business growth strategies.</div> 
                                                    <div className="testimonial-author">Jude Thorn - Founder</div>
                                                </div>
                                            </div>
                                            <div className="swiper-slider">
                                                <img src='images/testimonial-2.jpg' alt="" />
                                                    <div className="content-text">
                                                    <div className="content-text-margin">I recommend Aria to every business owner or growth leader that wants to take his company to the next level.</div> 
                                                    <div className="testimonial-author">Lindsay Rune - Manager</div>
                                                </div>
                                            </div>
                                            <div className="swiper-slider">
                                                <img src='images/testimonial-3.jpg' alt="" />
                                                    <div className="content-text">
                                                    <div className="content-text-margin">The guys from Aria helped with getting my business off the ground and turning into a profitable company.</div> 
                                                    <div className="testimonial-author">Roy Smith - Developer</div>
                                                </div>
                                            </div>
                                            <div className="swiper-slider">
                                                <img src='images/testimonial-4.jpg' alt="" />
                                                    <div className="content-text">
                                                    <div className="content-text-margin">My goals for using Aria's services seemed high when I first set them but they've met them with no problems.</div> 
                                                    <div className="testimonial-author">Ann Black - Consultant</div>
                                                </div>
                                            </div>
                                            <div className="swiper-slider">
                                            <img src='images/testimonial-5.jpg' alt="" />
                                                <div className="content-text">
                                                <div className="content-text-margin">I purchased the Growth Accelerator service pack a few years ago and I renewed the contract each year.</div> 
                                                <div className="testimonial-author">Marsha Singer - Marketer</div>
                                            </div>
                                        </div>
                                        <div className="swiper-slider">
                                        <img src='images/testimonial-6.jpg' alt="" />
                                            <div className="content-text">
                                            <div className="content-text-margin">At the beginning I thought the prices are a little high for what they offer but they over deliver each and every time.</div> 
                                            <div className="testimonial-author">Ronald Spice - Owner</div>
                                        </div>
                                    </div>
                                        </Carousel>
                                        </div>
                                    </div>           
                               </div>
                            </div>
                        </div>
    
                    </div>
                </div>
    
            )
            
        }
       



}

export default Testemonia;

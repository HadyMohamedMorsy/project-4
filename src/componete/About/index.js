import React from 'react';
import './about.scss';

class About extends React.Component{
    render(){
        return(
            <div className="About">
                <div className="container container-pr-pl">
                    <div className="row-about">
                        <div className="col-about">
                            <div className="image-container">
                                <img className="img-fluid" src="images/about.jpg" alt="alternative" />
                            </div>
                        </div>
                        <div className="col-about">
                            <div className="text-content">
                                <span className="sapn">ABOUT</span>
                                <h2>We're Passionate About Delivering Growth Services</h2>
                                <p>Our goal is to provide the right business growth services at the appropriate time so companies can benefit from the created momentum and thrive for a long period of time</p>
                                <ul className="services-lists">
                                    <li className="global-before"> Everything we recommend has direct positive impact </li>
                                    <li className="global-before"> You will become an important partner of our company</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About
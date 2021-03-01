import React from 'react';
import './footer.scss';

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="container container-pr-pl">
                    <div className="row-footer">
                        <div className="footer-col-6">
                        <div className="text-container">
                            <h4>Few Words About Aria</h4>
                            <p className="white">We're passionate about delivering the best business growth services for companies just starting out as startups or industry players that have established their market position a long tima ago.</p>
                        </div>
                        </div>
                        <div className="footer-col-2">
                                <h4> Links </h4>

                                <ul>
                                    <li> startupguide.com</li>
                                    <li> Terms & Conditions</li>
                                    <li> Privacy Policy</li>
                                </ul>
                        </div>
                        <div className="footer-col-2">
                            <h4> Tools </h4>

                            <ul>
                                <li> businessgrowth.com</li>
                                <li> influencers.com</li>
                                <li> optimizer.net</li>
                            </ul>
                        </div>
                        <div className="footer-col-2">
                            <h4> Partners </h4>

                            <ul>
                                <li> unicorns.com</li>
                                <li> staffmanager.com</li>
                                <li> association.gov</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row-footer">
                        <div className="col-12">
                                Copyright © 2021 Template by Hady Mohamed
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;
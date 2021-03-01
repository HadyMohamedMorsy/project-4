import React from 'react';
import './contact.scss'

class Contact extends React.Component{
    render(){
        return(
            <div className="contact">
                    <div className="container container-pr-pl">
                        <div className="row-contact">
                                <div className="contact-item">
                                    <div className="text-content">
                                    <span className="sapn">ABOUT</span>
                                    <h2>Get In Touch Using The Form</h2>
                                    <p>You can stop by our office for a cup of coffee and just use the contact form below for any questions and inquiries</p>
                                    <p><i className="fas fa-map-marker"></i> 28 st addrese -el wahda -Imbaba</p>
                                    <ul>
                                        <li><i className="fas fa-phone"></i> 01012315216</li>
                                        <li><i className="fas fa-phone"></i> 01003122032</li>
                                        <li><i className="fas fa-envelope"></i>hady812012@gmail.com</li>
                                    </ul>
                                    <h2>Follow Aria On Social Media</h2>
                                <span className="fonts">
                                    <span className="fonts-position"> <a href="your-link"> <span className="fonts-parent-icon"><i className=" fab fa-facebook-f fonts-icon"/></span> </a> </span>
                                    <span className="fonts-position"> <a href="your-link"> <span className="fonts-parent-icon"><i className=" fab fa-twitter fonts-icon"/></span> </a></span>
                                    <span className="fonts-position"> <a href="your-link"> <span className="fonts-parent-icon"><i className=" fab fa-pinterest-p fonts-icon"/></span> </a></span>
                                    <span className="fonts-position"> <a href="your-link"> <span className="fonts-parent-icon"><i className=" fab fa-instagram fonts-icon"/></span> </a></span>
                                    <span className="fonts-position"> <a href="your-link"> <span className="fonts-parent-icon"><i className=" fab fa-linkedin-in fonts-icon"/></span> </a></span>
                                    <span className="fonts-position"> <a href="your-link"> <span className="fonts-parent-icon"><i className=" fab fa-behance fonts-icon"/></span> </a></span>
                                </span>
                                 </div>
                            </div>
                                <div className="contact-item">
                                    <div className="form-group">
                                        <input type="text" className="form-control-input" required />
                                        <label className="label-control">Name</label>
                                        <div className="help-block with-errors">
                                            <ul><li>Please fill out this field.</li></ul>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control-input" required />
                                        <label className="label-control">Email</label>
                                        <div className="help-block with-errors">
                                            <ul><li>Please fill out this field.</li></ul>
                                        </div>
                                    </div>
                                    <div className="form-group has-error has-danger">
                                        <textarea className="form-control-textarea" id="cmessage" required=""></textarea>
                                        <label className="label-control">Your message</label>
                                        <div className="help-block with-errors"><ul className="list-unstyled"><li>Please fill out this field.</li></ul></div>
                                    </div>
                                        <div className="form-group checkbox">
                                            <input type="checkbox" id="lterms" value="Agreed-to-Terms" name="lterms" required />I agree with Aria's stated <a className="white" href="privacy-policy.html">Privacy Policy</a> and <a className="white" href="terms-conditions.html">Terms & Conditions</a>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    <div className="form-group">
                                        <button type="submit" className="form-control-submit-button">Submit Here</button>
                                    </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
export default Contact
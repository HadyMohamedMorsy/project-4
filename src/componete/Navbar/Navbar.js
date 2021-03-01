import React from 'react';
import {NavLink} from 'react-router-dom';
import image from './logo.svg';
import { FaFacebookF,FaTwitter} from 'react-icons/fa';
import './Navbar.scss';
class Navbar extends React.Component {
    humburger = () =>{
        const ParentList = document.querySelector('.counter-linke');
        const ChiledList = document.querySelector('.Navbar-ul-list');

        const containerHight = ParentList.getBoundingClientRect().height;
        const counterList = ChiledList.getBoundingClientRect().height;

        if(containerHight === 0){
            ParentList.style.height = `${counterList}px`;
        }else{
            ParentList.style.height = 0;
        }
    }
    componentDidMount(){
            const Header = document.querySelector('.Navbar');
             {this.props.getid(Header)}
    }


    render(){
        return(
            <nav className="Navbar">
            <div className="container Navbar-flex">
                <a className="Navbar-logo" href='#'> <img src={image} alt=''/> </a>
                    <div className="counter-linke">
                    <ul className="Navbar-ul-list">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/INTRO">INTRO</NavLink></li>
                        <li><NavLink to="/SERVICES">SERVICES</NavLink></li>
                        <li><NavLink to="/CALL ME">CALL ME</NavLink></li>
                        <li><NavLink to="/PROJECTS">PROJECTS</NavLink></li>
                        <li><NavLink to="/ABOUT">ABOUT</NavLink></li>
                        <li><NavLink to="/CONTACT">CONTACT</NavLink></li>
                    </ul>
                    </div>
                    <span className="fonts hide-for-mobile-icon">
                        <span className="fonts-position"> <a href="your-link"> <span className="fonts-parent-icon"><FaFacebookF className="fonts-icon"/></span> </a> </span>
                        <span className="fonts-position"> <a href="your-link"> <span className="fonts-parent-icon"><FaTwitter className="fonts-icon"/></span> </a></span>
                    </span>
                    <div className="Navbar-humburger hide-for-Desktop" onClick={()=> this.humburger()}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>    
            </nav>
        )
    }
}
export default Navbar;
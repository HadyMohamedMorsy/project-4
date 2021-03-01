import React from 'react';
import './header.scss';

class Header extends React.Component{
    componentDidMount(){
        const changing = document.querySelector('.Ghanging');
        {this.props.getclass(changing)}
    }
    render(){
        return(
            <div className="Header">
                <div className="Header-content">
                    <h1>BUSINESS  <span className="Ghanging">TEMPLATE</span></h1>
                    <p className="Header-pargraph">Aria is a top consultancy company specializing in business growth using online marketing and conversion optimization tactics</p>
                    <button>DISCOVER</button>
                </div>
            </div>

        )
    }
}
export default Header;

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
import React from 'react';
import './intro.scss'
import image from './intro-office.jpg';
import axios from 'axios';


class Intro extends React.Component{
    state = {
        alldata : []
    }
    componentDidMount(){
        axios.get('./data.json').
        then((res) => 
            this.setState({
                alldata : res.data.getdata
            })
        )
    }

    render(){
       const {alldata} =  this.state;


       const getalldata = alldata.map((item)=>{
            return(
            <div className="intro-icones-child" key={item.id}>
                <div className="Icont-image">
                    <div className="image-here">
                        <i className={item.icon}></i>
                    </div>
                </div>
                    <h4> {item.header}</h4>
                    <p> {item.textcontent}</p>
            </div>   
            )
       })
        return(
            <div className="intro">
                <div className="container intro-flex container-pr-pl">
                    <div className="intro-item ">
                    <span className="sapn">INTRO</span>
                        <h2>We Offer Some Of The Best Business Growth Services In Town</h2>
                        <p>Launching a new company or developing the market position of an existing one can be quite an overwhelming processs at times.</p>
                        <p>"Our mission here at Aira is to get you through those tough moments relying on our team's expertise in starting and growing companies.</p>
                <div className="intro-thunder">Hady Mohamed - CEO</div>
                            </div>
                    <div className="intro-item">
                        <div className="intro-image">
                            <img src={image} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="intro-flex container container-pr-pl">
                        {getalldata}
                </div>
            </div>

        )
    }
}
export default Intro;

import React from 'react';
import './Accelerate Business.scss';
import axios from 'axios';

class Accelerate  extends React.Component{
    state = {
        data : [],
        iconses : []
    }
    componentDidMount(){
        axios.get('./data.json').then((res)=> {this.setState({data : res.data.Bussness, iconses :res.data.icones})})
    }
    render(){
        const {data} = this.state;
        const alldata = data.map((item)=>{
            return(
                <div className="Accelerate-item-chiled" key={item.id}>
                <div className="clickable-change">
                <div className="clickable-span" >
                    <span className="span-numbers">
                        <span>{item.span}</span>
                    </span> 
                    <span className="span-links" data-here={item.dataHere} onClick={ this.props.getdataset} data-expanded="true">
                        {item.spanlinks} 
                    </span>
                </div>
                    <div className="last-Accelerate" id={item.classes}>
                        <p id={item.idPargraph}>
                            {item.pargraph}
                        </p>
                    </div>
                </div>
                </div>

            )
        })

        const {iconses} = this.state;
        const allicones = iconses.map((item)=>{
            return( <div className="lists-all" key={item.id}><i className="fas fa-dice-d6"></i><span className={item.classname} onClick={this.props.getactive} data-active = {item.dataactive}> {item.span} </span></div>)
           
        })
        return(
            <React.Fragment>
            <div className="Accelerate Accelerate-flex">
            <div className="Accelerate-item">
                <img src="images/details-1-background.jpg" alt="" />
            </div>
            <div className="Accelerate-item"> 
                <h2> Accelerate Business Growth To Improve Revenue Numbers</h2>
                    {alldata}
            </div>
        </div>

        <div className="Accelerate-secound Accelerate-secound-flex">
            <div className="Accelerate-secound-item">
                <div className="Accelerate-secound-child">
                    <div className="lists-of-chiled">
                            {allicones}
                    </div>
                        <div className="chiled-of-secound First" id="First-child">
                            <h4>Business Services For Companies </h4>
                            <p>Aria provides the most innovative and customized business services in the industry. Our <span className="services-span">Services</span> section shows how flexible we are for all types of budgets.</p>
                                <p className="pargraph">Business Development 100%</p>
                                <div className="parent-width"> <div className="child-width first-width"></div></div>
                                <p className="pargraph">Business Development 76%</p>
                                <div className="parent-width"> <div className="child-width secound-width"></div></div>
                                <p className="pargraph">Business Development 90%</p>
                                <div className="parent-width"> <div className="child-width thired-width"></div></div>
                        </div>
                        <div className="chiled-of-secound secound" id="secound-child">
                            <div className="chiled-flex">
                                <div className="list-of-chiled-secound">
                                    <span className="number" >1</span>
                                    <span> <span className="color"> High quality</span> is on top of our list when it comes to the way we deliver the services</span>
                                </div>
                                <div className="list-of-chiled-secound">
                                    <span className="number">2</span>
                                    <span><span className="color"> We're always looking</span> for industry leaders to help them win their market position</span>
                                </div>
                                <div className="list-of-chiled-secound">
                                    <span className="number">3</span>
                                    <span><span className="color"> Maximum impact</span> is what we look for in our actions</span>
                                </div>
                                <div className="list-of-chiled-secound">
                                    <span className="number">4</span>
                                    <span> <span className="color"> Evaluation</span> is a key aspect of this business and important</span>
                                </div>
                                <div className="list-of-chiled-secound">
                                    <span className="number">5</span>
                                    <span><span className="color"> Quality standards</span> are important but meant to be exceeded</span>
                                </div>
                                <div className="list-of-chiled-secound">
                                    <span className="number">6</span>
                                    <span><span className="color">Ethic</span> procedures ar alwasy at the base of everything we do</span>
                                </div>
                            </div>
                        </div>
                        <div className="chiled-of-secound thired"  id="thired-child">
                            <p className="last-of-secound">We strive to achieve 100% customer satisfaction for both types of customers: hiring companies and job seekers. Types of customers:<span className="services-span"> with huge potential </span> </p>
                            <p className="last-of-secound" >Our goal is to help your company achieve its full potential and establish long term stability for the stakeholders</p>
                            <ul className="services-lists last-of-secound">
                                <li className="global-before">It's easy to get a quotation, just call our office anytime</li>
                                <li className="global-before">We'll get back to you with an initial estimate soon</li>
                                <li className="global-before">Get ready to see results even after only 30 days</li>
                                <li className="global-before">Ask for a quote and start improving your business</li>
                                <li className="global-before">Just fill out the form and we'll call you right away</li>
                            </ul>
                        </div>
                </div>
            </div>
            <div className="Accelerate-secound-item">
                <img src="images/details-2-background.jpg" alt="" />
            </div>
        </div>
            
            </React.Fragment>

            

        )
    }
}
export default Accelerate;


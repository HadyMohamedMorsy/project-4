import React , {useState , useEffect} from 'react';
import './services.scss';
import axios from 'axios';
const Sevices =  ()=>  {

    const [services , setservices] = useState([]);
    useEffect(()=>{
        axios.get('./data.json').then
        ((res) => {setservices(res.data.gerservices)})
    
    },[]);
    const alldata = services.map((item)=>{
        return(
            <div className="services-item" key={item.id}>
            <div className="services-image" >
                <img src={item.image} alt="" />
            </div>
                <div className="services-body">
                    <h3> {item.header}</h3>
                    <p>{item.textcontent}</p>
                    <ul className="services-lists">
                        <li className="global-before">{item.listfirst}</li>
                        <li className="global-before">{item.listsecound}</li>
                    </ul>
                    <div className="last-item">Starting at <span> {item.price}</span></div>
                    <button>DETAILS</button>
                </div>
            </div>

        )
    })
        return(
            <div className="services">
            <div className="services-header">
                <span className="sapn">SERVICES</span>
                <h2>Choose The Service Package
                That Suits Your Needs</h2>
            </div>
                <div className="container services-flex container-pr-pl">
                    {alldata}
                </div>
            </div>
        )
}
export default Sevices;
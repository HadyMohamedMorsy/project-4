import React from 'react';
import './team.scss';
import { FaFacebookF,FaTwitter} from 'react-icons/fa';
import axios from 'axios';
class Team extends React.Component{
    state = {
        data : []

    }
    componentDidMount(){
        axios.get('./data.json').then(res => this.setState({data : res.data.Teaout}))
    }
    render(){
        const {data} = this.state;
        const alldata = data.map((item)=>{

            return(
                <div className="col-team" key={item.id}>
                <div className="team-member">
                    <div className="image-wrapper">
                        <img className="img-fluid" src={item.classes} alt="alternative"/>
                    </div>
                    <p className="p-large">{item.filter}</p>
                    <p className="job-title">{item.textcontent}</p>
                    <span className="fonts">
                        <span className="fonts-position"> <a href="your-link"> <span className="fonts-parent-icon"><FaFacebookF className="fonts-icon"/></span> </a> </span>
                        <span className="fonts-position"> <a href="your-link"> <span className="fonts-parent-icon"><FaTwitter className="fonts-icon"/></span> </a></span>
                    </span>
                </div>
            </div> 
            )
        })
        return(

            <div className="team">
                <div className="container container-pr-pl">
                        <div className="row-team">
                            <div className="col">
                            <h2> Our Team Of Consultants </h2>
                            </div>
                            <div className="col">
                                <p> We're only as strong and as knowledgeable as our team. So here are the men and women which help customers meet goals and grow companies </p>
                            </div>
                        </div>

                        <div className="row-team">
                            {alldata} 
                        </div>
                </div>
            </div>
        )
    }
}
export default Team;
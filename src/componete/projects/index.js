import React from 'react';
import './projects.scss';
import axios from 'axios';

class Project extends React.Component{
    state = {
        data : [],
        images : []
    }
    componentDidMount(){
        axios.get('./data.json').then(res => this.setState({data :res.data.buttones, images : res.data.images}))
    }
    render(){
        const {data} = this.state;
        const alldata = data.map((item)=>{

            return(
                <a key={item.id} className={item.classes} data-filter={item.filter} onClick={this.props.shuuffel}>{item.textcontent}</a>
            )
        })
        const {images} = this.state;
        const allimages = images.map((item)=>{
            return(
                <div className={item.classes} key={item.id}>
                    <div className="element-item-overlay"><span>{item.textcontent}</span></div><img src={item.images} alt="alternative"/>
                </div>

            )

        })
        return(

            <div className="projects">
                    <div className="container container-pr-pl">
                        <div className="row-projects">
                            <div className="col-projects">
                                <span className="sapn">PROJECTS</span>
                                <h2>Projects That We're Proud Of</h2>
                            </div>
                        </div>
                        <div className="row-projects">
                        <div className="col-projects">
                                <div className="button-group filters-button-group">
                                        {alldata}
                                </div>
                                <div className="grid">
                                        {allimages}
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

        )
    }

}
export default Project;
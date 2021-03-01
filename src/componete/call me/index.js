import React from 'react';
import './call me .scss'
import axios from 'axios';

class Call extends React.Component{
    state = {
        froms : [],
        lists : []
    }
    componentDidMount(){
        axios.get('./data.json').then(res => this.setState({froms : res.data.froms , lists : res.data.lists}))
    }
    render(){
        const {lists} = this.state;
        const alllists = lists.map((item)=>{
            return(

                <li className="global-before" key={item.id}>{item.text}</li>
            )

        })
        const {froms} = this.state;

        const allforms = froms.map((item)=>{
            return(
                <div className="form-group" key={item.id}>
                    <input type="text" className="form-control-input" id={item.idid} name={item.idid} required />
                    <label className="label-control">{item.label}</label>
                    <div className="help-block with-errors">
                        <ul><li>Please fill out this field.</li></ul>
                    </div>
                </div>
                
            )

        })

        return(
            <div className="call">
                <div className="container container-pr-pl">
                    <div className="row-call call-flex">
                        <div className="call-item">
                           <div className="text-content">
                                <span className="sapn">Call Me</span>
                                <h2>Have Us Contact You By Filling And Submitting The Form</h2>
                                <p>You are just a few steps away from a personalized offer. Just fill in the form and send it to us and we'll get right back with a call to help you decide what service package works.</p>
                                <ul className="services-lists">
                                    {alllists}
                                </ul>
                           </div>
                        </div>
                        <div className="call-item">
                        <form id="callMeForm" data-toggle="validator" data-focus="false">
                            {allforms}
                            <div className="form-group">
                                <select className="form-control-select" id="lselect" required>
                                    <option className="select-option" value="Interested in" disabled selected>Interested in...</option>
                                    <option className="select-option" value="Off The Ground">Off The Ground</option>
                                    <option className="select-option" value="Accelerated Growth">Accelerated Growth</option>
                                    <option className="select-option" value="Market Domination">Market Domination</option>
                                </select>
                                <div className="help-block with-errors">
                                    <ul className="list-unstyled"><li>Please fill out this field.</li></ul>
                                </div>
                            </div>
                            <div className="form-group checkbox white">
                                <input type="checkbox" id="lterms" value="Agreed-to-Terms" name="lterms" required />I agree with Aria's stated <a className="white" href="privacy-policy.html">Privacy Policy</a> and <a className="white" href="terms-conditions.html">Terms & Conditions</a>
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="form-control-submit-button">CALL ME</button>
                            </div>
                    </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }


}
export default Call;
import React, { Component } from 'react';
import logo from '../../../image/logo.png';
import './Registration.css';
import Progstepper from '../../../component/Progstepper/Progstepper';

class Registration extends Component {

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="reg_box">
                            <img className="reg_logo" src={logo} />
                            <div className="prog_stepper">
                                <Progstepper/>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registration;
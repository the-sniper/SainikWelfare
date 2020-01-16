import React, { Component } from 'react';
import logo from '../../../image/logo.png';
import Textfield from '../../../component/Input/Textfield/Textfield';
import PrimaryButton from '../../../component/Input/Button/PrimaryButton';
import CheckBox from '../../../component/Input/CheckBox/CheckBox';
import Registration from '../Registration/Registration';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
   
    state={
    LoginInputFields:[{
    label:"Username",
    type:"text"
    },
    {
    label:"Password",
    type:"password"
    }]
    };

    render() {  
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="login_box">
                            <img className="login_logo" src={logo} />
                            <h2 className="login_title">LOGIN</h2>
                            <p className="login_wcText">Welcome ! <br /> Login back to your account</p>
                            <form className="login_textForm d-flex" noValidate autoComplete="on">

                                {
                                    this.state.LoginInputFields.map((data,index)=>(
                                    <Textfield id={"LoginInputField_"+index} label={data.label} type={data.type} variant="outlined" > Input </Textfield>
                                    )
                                    )
                                }
   
                            </form>
                            <div className="login_rem d-flex justify-content-between align-items-center">
                                <CheckBox />
                                <a href="#"> Forgot password ?</a>
                            </div>
                            <div className="login_btn">
                                <PrimaryButton/>
                            </div>
                            <div className="login_helpText">
                                <p>Don't have an account ?
                        <br />Register 
                         <Link to="/Registration"> here</Link>
                        </p>
                            </div>
                            <p className="copyrights_text">ALL RIGHTS RESERVED © 2019</p></div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Login;
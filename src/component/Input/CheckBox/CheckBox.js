import React, { Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


class CheckBox extends Component{
    render(){
        return(
            <FormControlLabel
            control={
                <Checkbox value="rememberMe" color="primary" />
            }
            label="Remember Me"
        />         );
    }
}

export default CheckBox
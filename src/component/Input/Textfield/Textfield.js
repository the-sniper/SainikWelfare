import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';


class Textfield extends Component{
  
    render(){
        return(
            <TextField id="outlined-basic" label={this.props.label} type={this.props.type} placeholder={this.props.placeholder} variant="outlined" />
        );
    }
}

export default Textfield;
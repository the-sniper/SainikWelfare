import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './SecondaryButton.css'

class SecondaryButton extends Component {
    render() {
        return (
            <Button className="secondaryButton" variant="outlined" color="primary">
                {this.props.sec_label}
            </Button>
        );
    }
}

export default SecondaryButton;
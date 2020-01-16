import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './PrimaryButton.css'

class PrimaryButton extends Component {
    render() {
        return (
            <Button className="primaryButton" variant="contained">
                Login
            </Button>
        );
    }
}

export default PrimaryButton;
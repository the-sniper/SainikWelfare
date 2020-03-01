import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './PrimaryButton.css'

class PrimaryButton extends Component {
    render() {
        return (
            <Button className="primaryButton" variant="contained">
                {this.props.login_label}
            </Button>
        );
    }
}

export default PrimaryButton;
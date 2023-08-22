import React, { Component } from 'react';
import TextField from '@mui/material/TextField';

class InputBoxRenderer extends Component {
  render() {
    const { type, name, placeholder, formTitle, subTitle } = this.props;

    if (type && name && placeholder && formTitle) {
      return (
        <>
            <h1>FORM PREVIEW</h1>
            <h1>{formTitle}</h1>
            <h3>{subTitle}</h3>
            <TextField
            id="outlined-basic"
            label={name}
            variant="outlined"
            type={type}
            fullWidth
            placeholder={placeholder}
            />
        </>
      );
    } else {
      return <p>Please select input type and options</p>;
    }
  }
}

export default InputBoxRenderer;
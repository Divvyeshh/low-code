import React, { Component } from 'react';
import TextField from '@mui/material/TextField';

class InputBoxRenderer extends Component {
  render() {
    const { type, name, placeholder } = this.props;

    if (type && name && placeholder) {
      return (
        <TextField
          id="outlined-basic"
          label={name}
          variant="outlined"
          type={type}
          fullWidth
          placeholder={placeholder}
        />
      );
    } else {
      return <p>Please select input type and options</p>;
    }
  }
}

export default InputBoxRenderer;
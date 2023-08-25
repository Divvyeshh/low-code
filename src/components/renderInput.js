import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

class InputBoxRenderer extends Component {
  render() {
    const { type, name, placeholder, formTitle, subTitle, dynamic, size, subsize} = this.props;

    const FormTitleComponent = `h${size}`;
    const SubTitleComponent = `h${subsize}`;

    if (type && name && placeholder && formTitle) {
      return (
        <>
            <FormTitleComponent>{formTitle}</FormTitleComponent>
            <SubTitleComponent>{subTitle}</SubTitleComponent>
            <form>
              {dynamic.map((input, index) => (
                <TextField
                  key={index}
                  type={input.type}
                  name={input.name}
                  label={input.name}
                  fullWidth
                  variant="outlined"
                />
              ))}
            </form>
            <Button variant='outlined'>Submit</Button>
        </>
      );
    } else {
      return <p>Please enter title and select input type options</p>;
    }
  }
}

export default InputBoxRenderer;
import React, { Component } from 'react';
import './render.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

class InputBoxRenderer extends Component {
  render() {
    const { type, name, placeholder, formTitle, subTitle, dynamic, size, subsize} = this.props;

    const FormTitleComponent = `h${size}`;
    const SubTitleComponent = `h${subsize}`;

    if(formTitle && subTitle){
      return (
        <>
            <FormTitleComponent>{formTitle}</FormTitleComponent>
            <SubTitleComponent>{subTitle}</SubTitleComponent>
            <Box mt={2} mb={2}>
            <form className='form'>
              {dynamic.map((input, index) => (
                <div style={{marginTop: '15px'}}>
                  <TextField
                    key={index}
                    type={input.type}
                    name={input.name}
                    label={input.name}
                    fullWidth
                    variant="outlined"
                  />
                </div>
              ))}
            </form>
            </Box>
            <Button variant='outlined'>Submit</Button>
            <p style={{color: '#808080'}}><i>Note: This is a preview of the form</i></p>
        </>
      );
    }
    else{
      return(
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
        </>
      )
    }
  }
}

export default InputBoxRenderer;
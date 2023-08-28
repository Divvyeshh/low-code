import React, { Component } from 'react';
import './render.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';

class InputBoxRenderer extends Component {
  render() {
    const { type, name, placeholder, formTitle, subTitle, dynamic, size, subsize} = this.props;

    const FormTitleComponent = `h${size}`;
    const SubTitleComponent = `h${subsize}`;

    if(formTitle && subTitle){
      return (
        <>
            <FormTitleComponent className='font'>{formTitle}</FormTitleComponent>
            <SubTitleComponent className='font'>{subTitle}</SubTitleComponent>
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

            <Button variant='outlined'>Submit</Button>
            <p style={{color: '#808080'}}><i>Note: This is a preview of the form</i></p>
        </>
      );
    }
    else{
      return(
        <>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} style={{marginBottom: '20px', marginTop: '20px'}} animation='wave'/>
            <Skeleton variant="circular" width={100} height={100} style={{marginBottom: '20px', marginTop: '20px'}} animation='wave'/>
            <Skeleton variant="rounded" width={530} height={140} style={{marginBottom: '20px', marginTop: '20px'}} animation='wave'/>
            <Skeleton variant="rounded" width={530} height={140} style={{marginBottom: '20px', marginTop: '20px'}} animation='wave'/>
        </>
      )
    }
  }
}

export default InputBoxRenderer;
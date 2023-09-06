import React, { Component } from 'react';
import TextField from '@mui/material/TextField';

class FormDescription extends Component {
  render() {
    const { handleDescription } = this.props;
      return (
      <div className='container'>
          <TextField 
            type='text'
            fullWidth
            label = 'Description'
            onChange={handleDescription}
            multiline
            rows={5}
          />
      </div>
    )
    }
}

export default FormDescription;
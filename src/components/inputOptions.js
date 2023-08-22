import React, { Component } from 'react';
import './Dash.css';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

class InputOptions extends Component {
  render() {
    const { type, handleType, handleName, handlePlaceholder } = this.props;
    
    if(type != '')
    {
    return (
      <div className='container'>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Input</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="Type"
            onChange={handleType}
          >
            <MenuItem value={'text'}>Text</MenuItem>
            <MenuItem value={'number'}>Number</MenuItem>
            <MenuItem value={'password'}>Password</MenuItem>
            <MenuItem value={'mail'}>Mail</MenuItem>
          </Select>
        </FormControl>
        <div className='attributes'>
            <p>Attributes</p>
            <TextField id="outlined-basic" label="Name" variant="outlined" className='Name' onChange={handleName} />
            <TextField id="outlined-basic" label="Placeholder" variant="outlined" className='Placeholder' onChange={handlePlaceholder} /> <br />
        </div>
        
      </div>
    )
    }
    else{
        return(
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Input</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="Type"
                onChange={handleType}
            >
                <MenuItem value={'text'}>Text</MenuItem>
                <MenuItem value={'number'}>Number</MenuItem>
                <MenuItem value={'password'}>Password</MenuItem>
                <MenuItem value={'mail'}>Mail</MenuItem>
            </Select>
            </FormControl>
        )
    }
  }
}

export default InputOptions;
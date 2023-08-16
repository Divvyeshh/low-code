import React, { useState, Component } from 'react';
import './Dash.css'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

class Dash extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            type: '',
            placeholder: '',
            name: '',
        }
    }

  handleType = (event) => {
    this.setState({
        type: event.target.value,
    })
  };

  handleName = (event) => {
    this.setState({
        name: event.target.value,
    })
  };

  handlePlaceholder = (event) => {
    this.setState({
        placeholder: event.target.value,
    })
  };

  generateInputCode = () => {
    return `<input type="${this.state.type}" name="${this.state.name}" placeholder="${this.state.placeholder}/>"`;
  };
  render(){
  return (
    <div className='container'>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Input</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.state.type}
            label="Type"
            onChange={this.handleType}
            >
            <MenuItem value={'text'}>Text</MenuItem>
            <MenuItem value={'number'}>Number</MenuItem>
            <MenuItem value={'password'}>Password</MenuItem>
            <MenuItem value={'mail'}>Mail</MenuItem>
            </Select>
        </FormControl>
        <p>Attributes</p>
        <TextField id="outlined-basic" label="Name" variant="outlined" className='Name'onChange={this.handleName}/>
        <TextField id="outlined-basic" label="Placeholder" variant="outlined" className='Placeholder'onChange={this.handlePlaceholder}/> <br />
        <p>HTML code:</p>
        <pre>{this.generateInputCode()}</pre>
    
    </div>
  )};
};

export default Dash;

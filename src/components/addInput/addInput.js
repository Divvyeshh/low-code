import React, {Component} from 'react';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

class AddInput extends Component{
    render(){
        const { type, handleType, addInput, handleAddInput} = this.props
        
        return(
            <>
                {addInput ? (
                    <>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" required>Input</InputLabel>
                        <div style={{ display: "flex", width: "100%" }}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            label="Type"
                            onChange={handleType}
                            style={{width: '75%'}}
                        >
                        <MenuItem value={'text'}>Text</MenuItem>
                        <MenuItem value={'number'}>Number</MenuItem>
                        <MenuItem value={'password'}>Password</MenuItem>
                        <MenuItem value={'mail'}>Mail</MenuItem>
                        </Select>
                        <Button style={{width: '25%'}} onClick={handleAddInput}>Add Input</Button>
                        </div>
                    </FormControl>
                    </>
                ) : (
                    ""
                )}
            </>
        )
    }
}

export default AddInput;
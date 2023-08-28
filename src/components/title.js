import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import React, { Component } from 'react';

class Title extends Component{
    render(){
        const { formTitle, handleFormTitle, subTitle, handleSubtitle } = this.props;
        return(
            <>
                <Box my={2}>
                <TextField
                    id="outlined-basic"
                    label='Title'
                    variant="outlined"
                    type='text'
                    fullWidth
                    value={formTitle}
                    onChange={handleFormTitle}
                    required
                />
                </Box>

                <Box my={2}>
                <TextField
                    id="outlined-basic"
                    label='Sub-title'
                    variant="outlined"
                    type='text'
                    fullWidth
                    value={subTitle}
                    onChange={handleSubtitle}
                    required
                />
                </Box>
            </>
        )
    }
}

export default Title;
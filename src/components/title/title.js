import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import React, { Component } from 'react';

class Title extends Component{
    render(){
        const { formTitle, handleFormTitle, subTitle, handleSubtitle, handleSize, handleSubSize } = this.props;
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
                    InputProps={{
                        endAdornment: (
                        <>
                            <Button variant="text"color="primary" onClick={() => handleSize(1)}>h1</Button>
                            <Button variant="text"color="primary" onClick={() => handleSize(2)}>h2</Button>
                            <Button variant="text"color="primary" onClick={() => handleSize(3)}>h3</Button>
                        </>
                        )
                    }}
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
                    InputProps={{
                        endAdornment: (
                        <>
                            <Button variant="text"color="primary" onClick={() => handleSubSize(2)}>h2</Button>
                            <Button variant="text"color="primary" onClick={() => handleSubSize(3)}>h3</Button>
                            <Button variant="text"color="primary" onClick={() => handleSubSize(4)}>h4</Button>
                        </>
                        )
                    }}
                />
                </Box>
            </>
        )
    }
}

export default Title;
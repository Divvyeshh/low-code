import TextField from '@mui/material/TextField';
import React, { Component } from 'react';

class Title extends Component{
    render(){
        const { formTitle, handleFormTitle, subTitle, handleSubtitle } = this.props;
        return(
            <>
                <TextField
                    id="outlined-basic"
                    label='Title'
                    variant="outlined"
                    type='text'
                    fullWidth
                    value={formTitle}
                    onChange={handleFormTitle}
                />

                <TextField
                    id="outlined-basic"
                    label='Sub-title'
                    variant="outlined"
                    type='text'
                    fullWidth
                    value={subTitle}
                    onChange={handleSubtitle}
                />
            </>
        )
    }
}

export default Title;
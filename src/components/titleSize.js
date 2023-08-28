import React, {Component} from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

class TitleSize extends Component{
    
    render(){
        const {handleSize, handleSubSize} = this.props;
            return(
                <>
                    <Typography variant="h6">
                        Title size
                    </Typography>
                    <Button variant='text' onClick={() => handleSize(1)} >h1</Button>
                    <Button variant='text' onClick={() => handleSize(2)} >h2</Button>
                    <Button variant='text' onClick={() => handleSize(3)} >h3</Button>
                    <Button variant='text' onClick={() => handleSize(4)} >h4</Button>

                    <Typography variant="h6">
                        Subtitle size
                    </Typography>
                    <Button variant='text' onClick={() => handleSubSize(1)} >h1</Button>
                    <Button variant='text' onClick={() => handleSubSize(2)} >h2</Button>
                    <Button variant='text' onClick={() => handleSubSize(3)} >h3</Button>
                    <Button variant='text' onClick={() => handleSubSize(4)} >h4</Button>
                </>
            )
    }
}

export default TitleSize;
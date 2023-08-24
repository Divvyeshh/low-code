import React, {Component} from 'react';
import Button from '@mui/material/Button';

class TitleSize extends Component{
    
    render(){
        const {handleSize, handleSubSize} = this.props;
            return(
                <>
                    <h3>Title</h3>
                    <Button variant='text' onClick={() => handleSize(1)} >h1</Button>
                    <Button variant='text' onClick={() => handleSize(2)} >h2</Button>
                    <Button variant='text' onClick={() => handleSize(3)} >h3</Button>
                    <Button variant='text' onClick={() => handleSize(4)} >h4</Button>

                    <h3>Sub-Title</h3>
                    <Button variant='text' onClick={() => handleSubSize(1)} >h1</Button>
                    <Button variant='text' onClick={() => handleSubSize(2)} >h2</Button>
                    <Button variant='text' onClick={() => handleSubSize(3)} >h3</Button>
                    <Button variant='text' onClick={() => handleSubSize(4)} >h4</Button>
                </>
            )
    }
}

export default TitleSize;
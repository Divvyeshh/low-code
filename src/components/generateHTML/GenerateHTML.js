import React, {Component} from 'react'
import Button from '@mui/material/Button';

class GeneratedCode extends Component {
    render() {
      const { updateGeneratedCode } = this.props;
      const generatedCode = updateGeneratedCode();
  
      return (
        <div className='container'>
          <p className='font'>HTML code:</p>
          <pre>{generatedCode}</pre>
          <Button variant='outlined' onClick={ () => {navigator.clipboard.writeText(generatedCode);}}> Copy </Button>
        </div>
      );
    }
  }

  export default GeneratedCode;
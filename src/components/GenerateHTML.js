import React, {Component} from 'react'

class GeneratedCode extends Component {
    render() {
      const { generateInputCode } = this.props;
  
      return (
        <div className='container'>
          <p>HTML code:</p>
          <pre>{generateInputCode()}</pre>
        </div>
      );
    }
  }

  export default GeneratedCode;
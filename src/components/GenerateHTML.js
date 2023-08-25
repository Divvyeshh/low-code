import React, {Component} from 'react'

class GeneratedCode extends Component {
    render() {
      const { updateGeneratedCode } = this.props;
  
      return (
        <div className='container'>
          <p>HTML code:</p>
          <pre>{updateGeneratedCode()}</pre>
        </div>
      );
    }
  }

  export default GeneratedCode;
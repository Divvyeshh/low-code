import React, { Component } from 'react';
import './Dash.css';
import InputOptions from './inputOptions';
import GeneratedCode from './GenerateHTML';
import InputBoxRenderer from './renderInput';
import TitleSize from './titleSize';
import Title from './title';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

class Dash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      placeholder: '',
      name: '',
      formTitle: '',
      subTitle: '',
      size: '1',
      subsize: '1',
      inputs: [
       {
        type: '',
        name: '',
        placeholder: '',
       } 
      ],
      dynamic: [],
    };
  }
  
  handleSize = (val) => {
    this.setState({
      size: val,
    });
  };

  handleSubSize = (num) => {
    this.setState({
      subsize: num,
    });
  };
  
  handleType = (event) => {
    this.setState({
      type: event.target.value,
    });
  };

  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handlePlaceholder = (event) => {
    this.setState({
      placeholder: event.target.value,
    });
  };

  handleFormTitle = (event) => {
    this.setState({
      formTitle: event.target.value,
    })
  }

  handleSubtitle = (event) => {
    this.setState({
      subTitle: event.target.value,
    })
  }

  dynamicAdd = () => {
    this.setState((prevState) => ({
      dynamic: [
        ...prevState.dynamic,
        {
          type: this.state.type,
          name: this.state.name,
          placeholder: this.state.placeholder,
        },
      ],
    }));
  };
  

  generateInputCode = () => {
    return (
`<h${this.state.size}>${this.state.formTitle}</h${this.state.size}>
<h${this.state.subsize}>${this.state.subTitle}</h${this.state.subsize}>
<form>
      <input type="${this.state.type}" name="${this.state.name}" placeholder="${this.state.placeholder}" />
</form>`
    );
  };

  render() {
    return (
      <div className='container'>
      <Grid container spacing={2}>

        <Grid item xs={4} className='column'>
          <TitleSize handleSize={this.handleSize} handleSubSize={this.handleSubSize}/>
          <Title formTitle={this.state.formTitle} handleFormTitle={this.handleFormTitle} subTitle={this.state.subTitle} handleSubtitle={this.handleSubtitle}/>
          {this.state.inputs.map((input, index) => (
            <div key={index}>
              <InputOptions
                inputs={this.state.inputs}
                index={index}
                handleType={this.handleType}
                handleName={this.handleName}
                handlePlaceholder={this.handlePlaceholder}
              />
              <Button variant='text' onClick={this.dynamicAdd}>Add input</Button> 
            </div>
          ))}
        </Grid>

        <Grid item xs={4} className='column'>
          <InputBoxRenderer
            type={this.state.type}
            name={this.state.name}
            placeholder={this.state.placeholder}
            formTitle={this.state.formTitle}
            subTitle={this.state.subTitle}
            dynamic={this.state.dynamic}
            size={this.state.size}
            subsize={this.state.subsize}
          />
        </Grid>

        <Grid item xs={4} className='column'>
          <GeneratedCode generateInputCode={this.generateInputCode} />
        </Grid>

      </Grid>
      </div>
    );
  }
}

export default Dash;
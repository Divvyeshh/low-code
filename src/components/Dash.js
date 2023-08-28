import React, { Component } from 'react';
import './Dash.css';
import InputOptions from './inputOptions';
import GeneratedCode from './GenerateHTML';
import InputBoxRenderer from './renderInput';
import Navbar from './navbar';
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
      generatedCode: '',
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

  updateGeneratedCode = () => {
    const { size, subsize, formTitle, subTitle, dynamic } = this.state;

    let inputCode = `<h${size}>${formTitle}</h${size}>
<h${subsize}>${subTitle}</h${subsize}>
<form>`;

    dynamic.forEach((input) => {
      inputCode += `
  <input type="${input.type}" name="${input.name}" placeholder="${input.placeholder}" />`;
    });

    inputCode += `
</form>`;

    return inputCode; 
  };

  dynamicAdd = () => {
    this.setState(
      (prevState) => ({
        dynamic: [
          ...prevState.dynamic,
          {
            type: this.state.type,
            name: this.state.name,
            placeholder: this.state.placeholder,
          },
        ],
      }),
      () => {
        this.setState({ generatedCode: this.updateGeneratedCode() }); 
      }
    );
  };
  

  render() {
    return (
      <div className='container'>
      <Grid container spacing={2}>
        <Navbar />
        <Grid item xs={4} className='column'>
          <Title formTitle={this.state.formTitle} handleFormTitle={this.handleFormTitle} subTitle={this.state.subTitle} handleSubtitle={this.handleSubtitle}/>
          <TitleSize handleSize={this.handleSize} handleSubSize={this.handleSubSize}/>
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
          <GeneratedCode updateGeneratedCode={this.updateGeneratedCode} />
        </Grid>

      </Grid>
      </div>
    );
  }
}

export default Dash;
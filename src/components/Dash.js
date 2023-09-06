import React, { Component } from 'react';
import './Dash.css';

import Navbar from './navbar/navbar';
import Title from './title/title';
import FormDescriptionII from './formDescription/formDescriptionII';
import AddButton from './addButton/addButton';
import AddInput from './addInput/addInput';
import AddQuestion from './addQuestion/addQuestion'
import InputOptions from './inputOptions';
import InputBoxRenderer from './renderInput/renderInput';
import GeneratedCode from './generateHTML/GenerateHTML';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Form } from 'react-router-dom';

class Dash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'text',
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
      description: '',

      addInput: false,
      type: 'text',
      inputFields: [],

      addQuestion: false,
      questions: [
        {
          text: '',
          options: ['', '', '', ''],
        },
      ],
      multipleQuestion: [],
    };
  }
  handleAddQuestion = () => {
    const updatedQuestions = [
      ...this.state.questions, 
      {
        text: this.state.questions.text,
        options: [...this.state.questions.options]
      },
    ];
    this.setState({
      questions: updatedQuestions,
    });
  }

  handleQuestionChange = (e, questionIndex) => {
    const { questions } = this.state; // Assuming you have 'questions' in your state
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].text = e.target.value;
    this.setState({ questions: updatedQuestions });
  };  

  handleOptionChange = (event, questionIndex, optionIndex) => {
    const updatedQuestions = [...this.state.questions];
    updatedQuestions[questionIndex].options[optionIndex] = event.target.value;
    this.setState({ questions: updatedQuestions });
  };

  handleAddInput= () => {
    this.setState((prevState) => ({
      inputFields: [...prevState.inputFields, 
        {type: this.state.type}
      ]
    }))
  }

  handleInputClick = () => {
    this.setState({
      addInput: !this.state.addInput,
    })
  }

  handleQuestionClick = () => {
    this.setState({
      addQuestion: !this.state.addInput,
    })
  }

  handleDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  handleOption = (event, questionIndex, optionIndex) => { // Fixed 'questionIndex' definition
    const updatedQuestions = [...this.state.questions];
    updatedQuestions[questionIndex].options[optionIndex] = event.target.value;
    this.setState({ questions: updatedQuestions });
  };

  addQuestions = () => {
    const updatedQuestions = [...this.state.questions];
    updatedQuestions.push({
      text: '',
      options: ['', '', '', ''],
    });
    const updatedMultipleQuestions = [...this.state.multipleQuestion];
  
    this.setState({
      questions: updatedQuestions,
      multipleQuestion: updatedMultipleQuestions,
    });
  };

  // dynamicAdd = () => {
  //   this.setState(
  //     (prevState) => ({
  //       dynamic: [
  //         ...prevState.dynamic,
  //         {
  //           type: this.state.type,
  //           name: this.state.name,
  //           placeholder: this.state.placeholder,
  //         },
  //       ],
  //     }),
  //     () => {
  //       this.setState({
  //         generatedCode: this.updateGeneratedCode(),
  //         name: '', 
  //         placeholder: '', 
  //         type: '', 
  //       });
  //     }
  //   );
  // };

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
  

  render() {
    return (
      <div className='container'>
      <Grid container spacing={2}>
        <Navbar />
        <Grid item xs={4} className='column'>
          <Title 
            formTitle={this.state.formTitle} 
            handleFormTitle={this.handleFormTitle} 
            subTitle={this.state.subTitle} 
            handleSubtitle={this.handleSubtitle} 
            handleSize={this.handleSize} 
            handleSubSize={this.handleSubSize} 
            className='font'
          />
          {/* <FormDescription /> */}
          <FormDescriptionII handleDescription={this.handleDescription} />
          <AddButton 
            handleInputClick={this.handleInputClick}
            handleQuestionClick={this.handleQuestionClick}
          />
          <AddInput 
            type={this.state.type}
            handleType={this.handleType}
            addInput={this.state.addInput}
            handleAddInput={this.handleAddInput}
          />
          <AddQuestion
            questions={this.state.questions}
            addQuestion={this.state.addQuestion}
            handleOptionChange={this.handleOptionChange}
            handleQuestionChange={this.handleQuestionChange}
            addQuestions={this.addQuestions}
          />

          {/* {this.state.inputs.map((input, index) => (
            <div key={index}>
              <InputOptions
                inputs={this.state.inputs}
                index={index}
                handleType={this.handleType}
                handleName={this.handleName}
                handlePlaceholder={this.handlePlaceholder}
                className='font'
              />
              <Button variant='text' onClick={this.dynamicAdd}>Add input</Button> 
            </div>
          ))}
          
          
          {this.state.questions.map((question, questionIndex) => (
              <div key={questionIndex}>
                <TextField 
                  label={`Question ${questionIndex + 1}`}
                  value={question.text}
                  onChange={(event) =>
                    this.handleQuestionText(event, questionIndex)
                  }
                />
                {question.options.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <TextField
                      label={`Option ${optionIndex + 1}`}
                      value={option}
                      onChange={(event) =>
                        this.handleOption(event, questionIndex, optionIndex)
                      }
                    />
                  </div>
                ))}
                <Button variant='text' onClick={this.addQuestion}>
                  Add Question
                </Button>
              </div> 
            ))}*/}
        </Grid>

        <Grid item xs={4} className='column'>
          <InputBoxRenderer
            questions={this.state.questions}
            multipleQuestion={this.state.multipleQuestion}
            description={this.state.description}      
            formTitle={this.state.formTitle}
            subTitle={this.state.subTitle}
            dynamic={this.state.dynamic}
            size={this.state.size}
            subsize={this.state.subsize}
            className='font'

            inputFields={this.state.inputFields}
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
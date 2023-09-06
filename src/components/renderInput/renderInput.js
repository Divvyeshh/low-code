import React, { Component } from 'react';
import './render.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Skeleton from '@mui/material/Skeleton';

class InputBoxRenderer extends Component {
  render() {
    const { formTitle, subTitle, inputFields, size, subsize, questions, description} = this.props;

    const FormTitleComponent = `h${size}`;
    const SubTitleComponent = `h${subsize}`;

    if(formTitle && subTitle){
      return (
        <>
            <FormTitleComponent className='font'>{formTitle}</FormTitleComponent>
            <SubTitleComponent className='font'>{subTitle}</SubTitleComponent>
            <h3 className='font'>Description: {description}</h3>
            
            {inputFields.map((field, index) => (
              <TextField
                key={index}
                fullWidth
                label={`Input (${field.type})`}
                variant="outlined"
                onChange={(e) =>
                  this.setState((prevState) => {
                    const updatedFields = [...prevState.inputFields];
                    updatedFields[index].value = e.target.value;
                    return { inputFields: updatedFields };
                  })
                }
              />
            ))}
            
            {questions.map((question, index) => (
                <div key={index} style={{marginTop: '15px'}}>
                  {question.text && question.options.every(option => option.trim() !== "") && (
                  <FormControl component="fieldset">
                    <FormLabel component="legend">{question.text}</FormLabel>
                    <RadioGroup>
                      {question.options.map((option, optionIndex) => (
                        <FormControlLabel
                          key={optionIndex}
                          value={option}
                          control={<Radio />}
                          label={option}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                  )}
                </div>
              ))}

            <Button variant='outlined'>Submit</Button>
            <p style={{color: '#808080'}}><i>Note: This is a preview of the form</i></p>
        </>
      );
    }
    else{
      return(
        <>
            <h2 className='font'>Please enter Title and Subtitle to see preview</h2>
        </>
      )
    }
  }
}

export default InputBoxRenderer;
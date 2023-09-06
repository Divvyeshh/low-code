import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

class AddQuestion extends Component {
  render() {
    const { addQuestion, handleOptionChange, questions, addQuestions, handleQuestionChange } = this.props;
    return (
      <>
        {addQuestion ? (
          <div>
            {questions.map((question, questionIndex) => (
              <div key={questionIndex}>
                <TextField
                  label={`Question ${questionIndex + 1}`}
                  variant="outlined"
                  //value={question.text}
                  fullWidth
                  onChange={(e) =>
                    handleQuestionChange(
                      e,
                      questionIndex
                    )
                  }
                />
                {question.options.map((option, optionIndex) => (
                  <TextField
                    key={optionIndex}
                    label={`Option ${optionIndex + 1}`}
                    variant="outlined"
                    style={{width: '50%'}}
                    //value={option}
                    onChange={(e) =>
                      handleOptionChange(e, questionIndex, optionIndex)
                    }
                  />
                ))}
                <Button onClick={addQuestions}>Add Question</Button>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default AddQuestion;

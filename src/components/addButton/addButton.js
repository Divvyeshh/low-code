import React, { Component } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

class AddButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  toggleExpanded = () => {
    this.setState((prevState) => ({
      expanded: !prevState.expanded,
    }));
  };

  render() {
    const { handleInputClick, handleQuestionClick } = this.props;
    const { expanded } = this.state;

    return (
      <div>
        <Button onClick={this.toggleExpanded} className="main-button" style={{ paddingTop: "15px", paddingBottom: "15px" }}>
          {expanded ? (
            <div className="expanded-buttons">
              <ButtonGroup variant='text'>
                <Button onClick={handleInputClick}>Input</Button>
                <Button onClick={handleQuestionClick}>Question</Button>
              </ButtonGroup>
            </div>
          ) : (
            "Add"
          )}
        </Button>
      </div>
    );
  }
}

export default AddButton;

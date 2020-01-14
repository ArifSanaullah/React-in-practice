import React from "react";
import PropTypes from "prop-types";
import "./Square.css";

export default class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        currentColor: this.props.initialColor,
        isHidden: this.props.initialIsHidden,
    };
  }
  setCurrentColor(currentColor) {
    this.setState({
      currentColor
    });
  }
    
    toggleIsHidden() {
        this.setState((currentState) => {
            return {
                isHidden: !currentState.isHidden,
            };
        })
    }
  render() {
    const size = `${this.props.size}px`;
    console.log(this.state);
    let textInput;
    const style = {
      width: size,
      height: size,
        backgroundColor: this.state.currentColor,
      display: this.state.isHidden ? 'none' : 'block',
    };
    return (
      <div className="main">
        <div style={style} className="Square" id="Square"></div>
        <div className="squareControls">
          <input
            ref={element => {
              textInput = element;
            }}
            type="text"
            placeholder="Color..."
          />
          <button
            onClick={() => {
              this.setCurrentColor(textInput.value);
            }}
          >
            Ok
          </button>
          <button onClick={() => this.toggleIsHidden()}>
            {this.state.isHidden ? "Show" : "Hide"}
          </button>
        </div>
        <div className="clear"></div>
      </div>
    );
  }
}

Exercise.propTypes = {
  initialColor: PropTypes.string,
    size: PropTypes.number.isRequired,
  initialIsHidden: PropTypes.bool,
};

Exercise.defaultProps = {
    initialColor: "blue",
    initialIsHidden: false,
};

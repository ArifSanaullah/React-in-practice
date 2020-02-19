import React from "react";
import propTypes from "prop-types";
import "./Square.css";

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: this.props.initialColor,
      isHidden: this.props.initialIsHidden
    };
  }

  setCurrentColor(currentColor) {
    this.setState({
      currentColor: currentColor || this.props.initialColor
    });
  }

  hideSquare() {
    this.setState(currentState => {
      return {
        isHidden: !currentState.isHidden
      };
    });
  }
  render() {
    let textInput;
    const size = `${this.props.size}px`;
    const style = {
      width: size,
      height: size,
      backgroundColor: this.state.currentColor,
      display: this.state.isHidden ? "none" : "inline-block"
    };
    return (
      <div>
        <div style={style} className="Square"></div>
        <div className="squareControls">
          <input
            type="text"
            placeholder="Enter Color Name"
            ref={element => {
              textInput = element;
            }}
          />
          <button
            onClick={() => {
              this.setCurrentColor(textInput.value);
            }}
          >
            Set Color
          </button>
          <br />
          <button onClick={() => this.hideSquare(this.state.isHidden)}>
            {this.state.isHidden ? "Show Square" : "Hide Square"}
          </button>
        </div>
      </div>
    );
  }
}

Square.propTypes = {
  initialColor: propTypes.string.isRequired,
  size: propTypes.number.isRequired,
  initialIsHidden: propTypes.bool
};

Square.defaultProps = {
  initialColor: "yellow",
  initialIsHidden: false
};

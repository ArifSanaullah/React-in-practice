import React from "react";
import PropTypes from "prop-types";
import "./Square.css";

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xAxis: 0,
      yAxis: 0
    };
    this.squareRef = null;

    this.mouseOverHandler = this.mouseOverHandler.bind(this);
    this.mouseOutHandler = this.mouseOutHandler.bind(this);
  }

  mouseOverHandler(e) {
    const { left, top } = this.squareRef.getBoundingClientRect();
    this.setState({ xAxis: e.clientX - left, yAxis: e.clientY - top });
  }

  mouseOutHandler() {
    this.setState({ xAxis: 0, yAxis: 0 });
  }

  render() {
    const size = `${this.props.size}px`;
    const style = {
      width: size,
      height: size,
      backgroundColor: this.props.initialColor,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    };
    const { xAxis, yAxis } = this.state;
    return (
      <div className="SquareContainer">
        <div
          ref={e => (this.squareRef = e)}
          style={style}
          className="Square"
          onMouseMove={e => this.mouseOverHandler(e)}
          onMouseOut={() => this.mouseOutHandler()}
        >
          {xAxis}, {yAxis}
        </div>
      </div>
    );
  }
}

Square.propTypes = {
  initialColor: PropTypes.string,
  size: PropTypes.number.isRequired
};

Square.defaultProps = {
  initialColor: "blue"
};

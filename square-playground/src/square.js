import React from "react";
import PropTypes from "prop-types";
import "./Square.css";

// export default class Square extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentColor: this.props.initialColor
//     };
//   }
//   setCurrentColor(currentColor) {
//     this.setState({
//       currentColor
//     });
//   }
//   render() {
//       const size = `${ this.props.size }px`;
//     // console.log(this.state);
//     let textInput;
//     const style = {
//       width: size,
//       height: size,
//       backgroundColor: this.state.currentColor
//     };
//     return (
//       <div style={style} className="Square">
//         <div className="squareControls">
//             <input ref={element => { textInput = element; }} type="text" placeholder="Color..." />
//           <button onClick={() => {
//               this.setCurrentColor(textInput.value);
//             }}
//           >Ok</button>
//         </div>
//       </div>
//     );
//   }
// }

// Square.propTypes = {
//     initialColor: PropTypes.string,
//     size: PropTypes.number.isRequired,
// };

// Square.defaultProps = {
//   initialColor: "blue"
// };




// export default function Square({ size, color }) {
//   let textInput;
//   const sizeInPx = `${size}px`;
//   const style = {
//     width: size,
//     height: size,
//     backgroundColor: color,
//   };
//   return (
//     <div className="Square" style={style}></div>
//   );
// }
// Square.protoTypes = {
//   color: PropTypes.string,
//   size: PropTypes.number.isRequired,
// };

// Square.defaultProps = {
//   color: 'blue',
// };




export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
    this.squareRef = null;
  }
  updateCoords(e) {
    const { clientX, clientY } = e;
    const { left, top } = this.squareRef.getBoundingClientRect();
    this.setState({
      x: clientX - left,
      y: clientY - top,
    });
  }
  reset() {
    this.setState ({
        x: 0,
        y: 0,
    })
  }
  render() {
    const size = `${this.props.size}px`;
    const style = {
      width: size,
      height: size,
      backgroundColor: this.props.initialColor,
    };
    return (
      <div className="SquareContainer">
        <div
          ref={(e) => this.squareRef = e}
          className="Square"
          style={style}
          onMouseMove={(e) => this.updateCoords(e)}
          onMouseOut={() => this.reset()}
        >
          <div>{`${this.state.x}, ${this.state.y}`}</div>
        </div>
      </div>
    )
  }
}
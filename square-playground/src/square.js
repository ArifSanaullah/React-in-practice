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




export default function Square({ size, color }) {
  let textInput;
  const sizeInPx = `${size}px`;
  const style = {
    width: size,
    height: size,
    backgroundColor: color,
  };
  return (
    <div className="Square" style={style}></div>
  );
}
Square.protoTypes = {
  color: PropTypes.string,
  size: PropTypes.number.isRequired,
};

Square.defaultProps = {
  color: 'blue',
};
import React from "react";
import { connect } from "react-redux";

function CheckNumber(props) {
  return <div>{props.number}</div>;
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(CheckNumber);

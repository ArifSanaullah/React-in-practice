import React from 'react';
import PropTypes from 'prop-types';
import "./Square.css";

export default class Square extends React.Component {
    render() {
        // this.props.initialColor = 'yellow';
        const style = {
            width: '100px',
            height: '100px',
            backgroundColor: this.props.initialColor
        };
        // return null;
        return (<div style={style} className="Square"></div>);
    }
}

Square.propTypes = {
    initialColor: PropTypes.string,
};

Square.defaultProps = {
    initialColor: "black",
}
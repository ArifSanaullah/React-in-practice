import React from 'react'

export default function Container(props) {
    console.log(props.children);
    const items = React.Children.map(props.children, (item) => <li>{item}</li>)
    return (
        <ul>{items}</ul>
    )
}

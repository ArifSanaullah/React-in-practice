import React, { Component } from "react";
import TodoItem from "../ToDoItem.component/ToDoItem.component";

export default class ToDoList extends Component {
  render() {
    const { todos } = this.props;
    if (todos && todos.length) {
      return (
        <ul>
          {todos.map((item, index) => (
            <TodoItem
              todo={item}
              key={index}
              deleteHandler={() => this.props.deleteHandler(item)}
            />
          ))}
        </ul>
      );
    } else return null;
  }
}

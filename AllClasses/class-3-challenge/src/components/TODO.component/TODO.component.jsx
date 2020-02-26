import React, { Component } from "react";
import style from "./TODO.module.css";
import TodoList from "../ToDoList.component/ToDoList.component";
import Input from "../Input.component/Input.component";
import Button from "../Button.component/Button.component";

export default class TODO extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      todo: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.searchTodo = this.searchTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  handleChange(target) {
    this.setState({ todo: target.value });
  }

  addTodo() {
    const { todos, todo } = this.state;
    todo &&
      this.setState(() => {
        todos.push(todo);
        return { todos: todos, todo: "" };
      });
  }

  searchTodo() {}

  deleteTodo(todoKey) {
    this.setState({ todos: this.state.todos.filter(item => item !== todoKey) });
  }

  render() {
    return (
      <div className={style.TODO}>
        <q>
          We will never finish everything on our to-do lists. It's not possible,
          and that is life :)
        </q>

        <Input
          inputType="search"
          inputPlace="Search"
          changeHandler={() => this.searchTodo()}
        />
        <Input
          textValue={this.state.todo}
          inputType="text"
          inputPlace="Add Todo"
          changeHandler={e => this.handleChange(e.target)}
        />
        <Button buttonValue="Add" clickHandler={this.addTodo} />
        {this.state.todos && (
          <TodoList todos={this.state.todos} deleteHandler={this.deleteTodo} />
        )}
      </div>
    );
  }
}

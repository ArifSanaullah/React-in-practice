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
      todo: "",
      finalTodos: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.searchTodo = this.searchTodo.bind(this);
    this.finalTodos = this.finalTodos.bind(this);
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
        this.finalTodos(); //to keep finalTodos updated with todos.
        return { todos: todos, todo: "" };
      });
  }

  finalTodos() {
    this.setState({ finalTodos: [...this.state.todos] });
  }

  searchTodo(target) {
    const { todos } = this.state;
    const searchItem = new RegExp(target.value, "gi");
    const foundTodos = todos.filter(todo => todo.match(searchItem));
    this.setState({ finalTodos: foundTodos, todos: todos });
  }

  deleteTodo(todoKey) {
    console.log(todoKey);
    this.setState({
      finalTodos: this.state.finalTodos.filter(item => item !== todoKey)
    });
  }

  render() {
    return (
      <div className={style.TODO}>
        <div className={style.todoStarter}>
        <q>
          We will never finish everything on our to-do lists. It's not possible,
          and that is life :)
        </q>

        <Input
          inputType="search"
          inputPlace="Search Todo"
          changeHandler={e => this.searchTodo(e.target)}
        />
        <Input
          textValue={this.state.todo}
          inputType="text"
          inputPlace="Add Todo"
          changeHandler={e => this.handleChange(e.target)}
        />
        <Button
          buttonValue="Add"
          clickHandler={this.addTodo}
          buttonClass="addButton"
        />
        </div>
        {this.state.todos && (
          <TodoList
            todos={this.state.finalTodos}
            deleteHandler={this.deleteTodo}
          />
        )}
      </div>
    );
  }
}

import React, { Component } from "react";
import List from "../List";
import "./app.css";

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Create React App"),
      this.createTodoItem("Study Bible"),
      this.createTodoItem("Read book of Hemingway")
    ]
  };
  createTodoItem(label) {
    return {
      label,
      done: false,
      important: false,
      id: this.maxId++
    };
  }
  // *************************************************
  render() {
    return (
      <div className="app">
        <List todos={todoData} />
      </div>
    );
  }
}

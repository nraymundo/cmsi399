import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "drink brews with the boys" },
      { id: 2, content: "ball with the boys" },
      { id: 3, content: "run from 12" },
      { id: 5, content: "get arrested" },
      { id: 6, content: "break out of jail" },
      { id: 7, content: "drink brews again with the boys" }
    ]
  };
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };
  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">A Life in the Day of Nico</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;

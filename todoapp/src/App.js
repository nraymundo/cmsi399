import React, { Component } from "react";
import Todos from "./Todos";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "drink brews with the boys" },
      { id: 2, content: "shoot up with the boys" },
      { id: 3, content: "run from 12" },
      { id: 4, content: "hit a lick" },
      { id: 5, content: "get arrested" },
      { id: 6, content: "break out of jail" },
      { id: 7, content: "drink brews with the boys" }
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
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;

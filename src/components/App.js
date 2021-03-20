import React, { Component } from 'react';
import AddTodoForm from '../containers/AddTodoForm';
import TodoList from '../containers/TodoList';
import FilterMenu from '../containers/FilterMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Another Todo Box</h1>
        <AddTodoForm />
        <TodoList />
        <FilterMenu />
      </div>
    );
  }
}

export default App;

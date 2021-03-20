import React from 'react';
import { connect } from 'react-redux';
import ToDo from './ToDo'

function mapStateToProps(state) {
  return {
    todos: state.todos.list,
    completed: state.todos.completed,
    active: state.todos.active,
    display: state.todos.display
  };
}

const ToDoList = ({todos, display, active, completed}) => {
  let todoDisplay
  
  if(display === 'active'){
    todoDisplay = 
      active.map(todo => {
        return (
          <ToDo 
            {...todo}
            key={todo.id}
            display={display}
          />
        )
      })  
  } else if(display === 'completed') {
    todoDisplay =
      completed.map(todo => {
        return (
          <ToDo
            {...todo}
            key={todo.id}
            display={display}
          />
        )
      }) 
  } else {
    todoDisplay =
      todos.map(todo => {
        return (
          <ToDo
            {...todo}
            key={todo.id}
            display={display}
          />
        )
      })  
  }
  return (
    <ul>
      {todoDisplay}
    </ul>
  );
}

export default connect(
  mapStateToProps,
)(ToDoList);
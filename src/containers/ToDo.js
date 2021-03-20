import React from 'react';
import { toggleTodo } from '../actions'
import { connect } from 'react-redux'

const ToDo = ({ id, text, completed, toggleTodo, display }) => {
  
  const handleClick = (event) => {
    event.preventDefault()
    toggleTodo(id, display)
  }
  
  return (
    <li
      className={completed ? 'completed' : 'not-completed'}
      onClick={handleClick}
    >
      {text}
    </li>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleTodo: (id, display)=> dispatch( toggleTodo(id, display) )
})

export default connect(null, mapDispatchToProps)(ToDo);
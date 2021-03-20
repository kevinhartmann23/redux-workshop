export const todos = (state = {list: [], completed: [], active: [], display: ''}, action) => {
  
  const completedList = () =>  {
    return state.list.filter(todo => todo.completed)
  }
  const activeList = () => {
    return state.list.filter(todo => !todo.completed)
  }

  
  switch (action.type) {
    
    case 'ADD_TODO':
      const newTodo = {
        id: Date.now(),
        text: action.todo,
        completed: false
      }

      return {
        ...state,
        list: [...state.list, newTodo],
        completed: completedList(),
        active: [...state.active, newTodo],
        display: state.display
      }  

    case 'TOGGLE_COMPLETED':
      const toggleList = state.list.map(todo => {
        if (action.id === todo.id) {
          todo.completed = !todo.completed 
        }   return todo
      })
      

      return {
        ...state,
        list: toggleList,
        completed: completedList(),
        active: activeList(),
        display: action.display
      }  
      
    case 'FILTER_COMPLETED':
        return {
          ...state,
          list: [...state.list],
          completed: completedList(),
          active: activeList(),
          display: 'completed'
          }

    case 'FILTER_ACTIVE':
      return {
        ...state,
        list: [...state.list],
        completed: completedList(),
        active: activeList(),
        display: 'active'
      }

    case 'SHOW_ALL':
      return {
        ...state,
        list: [...state.list],
        completed: completedList(),
        active: activeList(),
        display: ''
      }  
    
    default: 
      return state
  }
}


// return state.list.map(todo => {
//   if (action.id === todo.id) {
//     todo.completed = !todo.completed
//   }
//   return todo
// })